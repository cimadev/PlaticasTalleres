const express = require('express')//()
const app = express()
const server = require('http').Server(app)
const routes = require('./server/routes')
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
const bodyParser = require('body-parser')

nextApp.prepare()
.then(() => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.use('/api/', routes, (err) => {
    if (err) throw err
  })
  app.get('*', (req, res) => {
    return handle(req, res)
  })

  io.on('connect', socket => {
    socket.emit('now', {
      message: 'CimaChat'
    })
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
