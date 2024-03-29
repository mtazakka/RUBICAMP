const express = require('express')
const app = express()
var bodyParser = require('body-parser') /*ada pilihan pake JSON di web npm*/
const path = require('path')
const port = 3000

//---------------------sqlite-------------------//
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
  else {
    console.log('Connection Success')
  }
});
//-------------------end------------------//

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') /* untuk baca engine, skrg pake html */
app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//--------ROUTER--------------------
app.get('/', (req, res) => { /* /...adalah router */
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


  let sql = 'SELECT COUNT(*) AS total FROM cobadata'
  if (params.length > 0)
    sql += ` WHERE ${params.join(' AND ')}`

  db.all(sql, values, (err, data) => {
    if (err) return res.send(err)
    const pages = Math.ceil(parseInt(data[0].total) / limit)

    sql = "SELECT * FROM cobadata"
    if (params.length > 0)
      sql += ` WHERE ${params.join(' AND ')}`

    sql += ` LIMIT $${counter++} OFFSET $${counter++}`

    db.all(sql, [...values, limit, offset], (err, data) => {
      if (err) {
        console.log('Failed to read')
        throw err;
      }
      res.render('list', { rows: data, data, page, pages, previous, next, query: req.query, url })   /* res render = menerima dari file */
    })
  })
})


app.get('/add', (req, res) => { /* /...adalah router */
  res.render('add')   /* res render = menerima dari file */
})

app.post('/add', (req, res) => { /* /...adalah router */
  const addData = 'INSERT INTO cobadata(string, integer, float, date, boolean) values (?,?,?,?,?)'
  db.get(addData, [req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean], (err) => {
    if (err) {
      console.log('Failed to add')
      throw err;
    }
    res.redirect('/')
  })
})
app.get('/delete/:id', (req, res) => {
  const index = parseInt(req.params.id)
  const deleteData = 'DELETE FROM cobadata WHERE cobadata.id = ?'
  db.run(deleteData, [index], (err) => {
    if (err) {
      {
        console.log('Failed to delete')
        throw err
      }
    }
  })
  res.redirect('/')
})



app.get('/edit/:id', (req, res) => {
  const selectData = 'SELECT * FROM cobadata WHERE cobadata.id = ?'
  const index = parseInt(req.params.id)
  db.get(selectData, [index], (err, item) => {
    if (err) {
      console.log('Failed to read')
      throw err;
    }
    console.log(item)
    res.render('edit', { item, index })   /* res render = menerima dari file */
  })
})

app.post('/edit/:id', (req, res) => {
  const index = req.params.id
  const editData = 'UPDATE cobadata set string=?, integer=?, float=?, date=?, boolean=? where cobadata.id = ?'
  db.run(editData, [req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean, index], (err) => {
    if (err) {
      console.log('Failed to add')
      throw err;
    }
    res.redirect('/')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

