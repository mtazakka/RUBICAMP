const express = require('express')
const app = express()
var bodyParser = require('body-parser') /*ada pilihan pake JSON di web npm*/
const path = require('path')
const port = 3000

//---------------------sqlite-------------------//
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    else{
    console.log('Connection Success')}
});
//-------------------end------------------//

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs') /* untuk baca engine, skrg pake html */
app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//--------ROUTER--------------------
app.get('/', (req, res, next) => { /* /...adalah router */
 const page = req.query.page || 1
 const limit = 3
 const offset =(page - 1) * limit

const readData = 'SELECT COUNT(*) as total FROM cobadata'
db.all(readData, (err, data) => {
  if (err) return res.send(err)
  const pages = Math.ceil(parseInt(data[0].total/limit))
  db.run("SELECT * FROM cobadata LIMIT $1 OFFSET $2", [limit, offset], (err, data)=>{
  if(err){ 
    console.log('Failed to read')
    throw err;
  }
  res.render('list', {data: data.rows, page, pages })   /* res render = menerima dari file */ 
})
})
})
app.get('/add', (req, res) => { /* /...adalah router */
  res.render('add')   /* res render = menerima dari file */ 
})

app.post('/add', (req, res) => { /* /...adalah router */
const addData = 'INSERT INTO cobadata(string, integer, float, date, boolean) values (?,?,?,?,?)'
db.get(addData, [req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean], (err)=> {
  if (err){
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
    if(err){{
      console.log('Failed to delete')
      throw err
    }}
  })
  res.redirect('/')
})   



app.get('/edit/:id', (req, res) => {
const selectData = 'SELECT * FROM cobadata WHERE cobadata.id = ?'
const index = parseInt(req.params.id)
db.get(selectData, [index], (err, item) => {
  if(err){
    console.log('Failed to read')
    throw err;
  }
  res.render('edit', {item, index })   /* res render = menerima dari file */ 
})})

app.post('/edit/:id', (req, res) => {
  const index = req.params.id
  const editData = 'UPDATE cobadata set string=?, integer=?, float=?, date=?, boolean=? where cobadata.id = ?'
  db.run(editData, [req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean, index], (err)=> {
    if (err){
      console.log('Failed to add')
      throw err;
    }
  res.redirect('/')
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

