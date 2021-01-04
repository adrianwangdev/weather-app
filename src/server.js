const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('express web page')
})

app.get('/about', (req, res) => {
  res.send('get about')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Started at ${port}`)
})
