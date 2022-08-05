const express = require('express')
const app = express()
var bodyParser = require('body-parser') /*ada pilihan pake JSON di web npm*/
const path = require('path')
const data =[{nama: 'Emir', alamat: 'Cianjur'},{nama: 'Zakka', alamat: 'Lampung'}] /*nyimpen data, bisa kejsonin*/
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
  data.push({nama: req.body.nama, alamat: req.body.alamat })
  res.redirect('/')

})
app.get('/delete/:id', (req, res) => {
  const index = req.params.id
  data.splice(index,1)
  res.redirect('/')
})   
app.get('/edit/:id', (req, res) => {
  res.render('edit', {item : data[req.params.id], index: parseInt(req.params.id)})
})

app.post('/edit/:id', (req, res) => {
  const index = req.params.id
  data[index] = {nama: req.body.nama, alamat: req.body.alamat }
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})