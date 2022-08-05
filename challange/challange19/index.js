const express = require('express')
const app = express()
var bodyParser = require('body-parser') /*ada pilihan pake JSON di web npm*/
const path = require('path')
const fs = require('fs');
var json = fs.readFileSync('database.json', 'utf-8')
var data = (JSON.parse(json))
const port = 3000

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs') /* untuk baca engine, skrg pake html */
app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => { /* /...adalah router */
  res.render('list', { data })   /* res render = menerima dari file */ 
})
app.get('/add', (req, res) => { /* /...adalah router */
  res.render('add')   /* res render = menerima dari file */ 
})

app.post('/add', (req, res) => { /* /...adalah router */
  data.push({string: req.body.string, integer: req.body.integer, float: req.body.float, date: req.body.date, boolean:req.body.boolean}) 
  fs.writeFileSync('database.json', JSON.stringify(data))
  res.redirect('/')

})
app.get('/delete/:id', (req, res) => {
  const index = req.params.id
  console.log(index)
  data.splice(index,1)
  fs.writeFileSync('database.json', JSON.stringify(data))
  res.redirect('/')
})   

app.get('/edit/:id', (req, res) => {
  res.render('edit', {item: data[req.params.id], index: parseInt(req.params.id)})
})

app.post('/edit/:id', (req, res) => {
  const index = req.params.id
  data[index] = ({string: req.body.string, integer: req.body.integer, float: req.body.float, date: req.body.date, boolean:req.body.booelan}) 
  fs.writeFileSync('database.json', JSON.stringify(data))
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})