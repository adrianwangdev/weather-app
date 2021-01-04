const path = require('path')
const express = require('express')
const app = express()
const router = require('./router')

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.set('views', 'views')  // the seconde argument is directory name
app.set('view engine', 'hbs')  // use a templating engine whose extension is 'hbs'

app.use('/', router)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Started at ${port}`)
})
