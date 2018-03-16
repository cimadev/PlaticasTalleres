const express = require('express')
const routes = express()
const msgController = require('./controllers/msgController')

routes.post('/add-msg', msgController.post)

routes.get('/get-msg', msgController.getAll)

module.exports = routes
