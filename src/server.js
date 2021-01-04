const path = require('path')
const express = require('express')
const app = express()

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.set('views', 'views')  // the seconde argument is directory name
app.set('view engine', 'hbs')  // use a templating engine whose extension is 'hbs'

/**
 * use send function to render something on the new page:
 * --- res.send('This is Home page')
 *
 * use sendFile function to get html file:
 * --- res.sendFile('index', {
 * ---   root: path.join(__dirname, '../public/')  // directory
 * --- })
 *
 * use render function to get hbs file:
 * --- res.render('index')
 */

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Weather'
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Started at ${port}`)
})
