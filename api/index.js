const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const server = app.listen(5000, function () {
  const host = 'localhost'
  const post = 5000

  console.log('Express App starting on http://localhost:5000')
})
