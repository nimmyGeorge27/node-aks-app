const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Project 5 Running')
})

app.listen(3000)