const express = require('express')
const app = express()
const port = 3001
const bodyparser = require('body-parser')
const db = require ("./connection")
const response = require('./response')

app.use(bodyparser.json())

app.get('/', (req, res) => {
  response(200, "API v1 ready to go", "Success",res)
})
app.get('/mahasiswa', (req, res) => {
  const sql = `SELECT * FROM mahasiswa`
  db.query(sql, (err,fields)=>{
    if(err) throw err
    response(200,fields,'mahasiswa get list', res)
  })
})

app.post('/mahasiswa', (req, res) => {
 response(200, "","ini posting", res)
   
})

app.put('/username', (req, res) => {
  console.log({updateData:req.body});
  res.send('update berhasil!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})