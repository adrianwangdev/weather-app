const express = require('express')
const router = express.Router()
const controller = require('./controllers/controller')

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

router.get('/', controller.renderHomePage)
router.get('/about', controller.renderAboutPage)

module.exports = router
