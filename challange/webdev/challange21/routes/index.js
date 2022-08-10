var express = require('express');
var router = express.Router();
const moment = require('moment')



module.exports = function (db) {
  // router.get('/', function (req, res, next) {
  //   db.query('SELECT * FROM todos', (err, data) => {
  //     if (err) return res.send(err)
  //     res.render('list', { data: data.rows })
  //   })
  // });

//----------------Add---------------//
//--------ROUTER--------------------

router.get('/', (req, res) => { /* /...adalah router */
  const page = req.query.page || 1
  const previous = parseInt(page) - 1
  const next = parseInt(page) + 1
  const limit = 3
  const offset = (page - 1) * limit
  const url = req.url == '/' ? '/?page=1' : req.url

  //searching
  const params = []
  const values = []
  let counter = 1

  if (req.query.string && req.query.stringFilters == 'on') {
    params.push(`string like '%' || $${counter++} || '%'`)
    values.push(req.query.string)
  }
  if (req.query.integer && req.query.integerFilters == 'on') {
    // params.push(`integer like '%' || $${counter++} || '%'`)
    params.push(`integer = $${counter++}`)
    values.push(req.query.integer)
  }
  if (req.query.float && req.query.floatFilters == 'on') {
    // params.push(`float like '%' || $${counter++} || '%'`)
    params.push(`float = $${counter++}`)
    values.push(req.query.float)
  }
  if (req.query.dateFilters == 'on') {
    if (req.query.startDate != '' && req.query.toDate != '') {
      params.push('date BETWEEN ? AND ?')
      values.push(req.query.startDate)
      values.push(req.query.toDate)
    } else if (req.query.startDate) {
      params.push('date > ?')
      values.push(req.query.startDate)
    } else {
      params.push('date < ?')
      values.push(req.query.toDate)
    }
  }
  if (req.query.boolean && req.query.booleanFilters == 'on') {
    params.push(`boolean = $${counter++}`)
    values.push(req.query.boolean)
  }


  let sql = 'SELECT COUNT(*) AS total FROM todos'
  if (params.length > 0)
    sql += ` WHERE ${params.join(' AND ')}`

  db.query(sql, values, (err, data) => {
    if (err) return res.send(err)
    const total = data.rows[0].total
    const pages = Math.ceil(total / limit)

    sql = "SELECT * FROM todos"
    if (params.length > 0)
      sql += ` WHERE ${params.join(' AND ')}`

    sql += ` LIMIT $${counter++} OFFSET $${counter++}`

    db.query(sql, [...values, limit, offset], (err, data) => {
      if (err) {
        console.log('Failed to read')
        throw err;
      }
      res.render('list', { rows: data, data:data.rows, page, pages, previous, next, query: req.query, url })   /* res render = menerima dari file */
    })
  })
})




router.get('/add', function (req, res, next) {
res.render('form')
})

router.post('/add', function (req, res, next) {
  const addData = 'INSERT INTO todos(string, integer, float, date, boolean) values ($1,$2,$3,$4,$5)'
  const date = moment(req.query.date).format('DD MMMM YYYY')
  db.query(addData, [req.body.string, req.body.integer, req.body.float, date, req.body.boolean], (err, data) => {
    if (err) return res.send(err)
    res.redirect('/')
  })
});

//----------------Delete---------------//

router.get('/delete/:id', (req, res) => {
  const index = parseInt(req.params.id)
  const deleteData = 'DELETE FROM todos WHERE id = $1'
  db.query(deleteData, [index], (err) => {
    if (err) {
      {
        console.log('Failed to delete')
        throw err
      }
    }
  })
  res.redirect('/')
})

//----------------Edit---------------//
router.get('/edit/:id', (req, res) => {
  const selectData = 'SELECT * FROM todos WHERE todos.id = $1'
  const index = parseInt(req.params.id)
  db.query(selectData,[index], (err, item) => {
    if (err) {
      console.log('Failed to read')
      throw err;
    }
    res.render('edit', { item:item.rows[0], index })   /* res render = menerima dari file */
    console.log(item)
  })
})

router.post('/edit/:id', (req, res) => {
  const index = req.params.id
  const date = moment(req.query.date).format('DD MMMM YYYY')
  const editData = 'UPDATE todos set string=$1, integer=$2, float=$3, date=$4, boolean=$5 where todos.id = $6'
  db.query(editData, [req.body.string, req.body.integer, req.body.float, date, req.body.boolean, index], (err) => {
    if (err) {
      console.log('Failed to add')
      throw err;
    }
    res.redirect('/')
  })
})

return router;
}
