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


let userCount = 0;
let onlineUsers = [
  'Cimadev'
]
let msgDb  = [
  {
    userName: 'Cimadev',
    msg: 'Hello welcome to cimachat web app :)'
  }
]

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
    let addedUser = false
    socket.on('add user', (userName) => {
      if(addedUser) return;
      let userNameUnique = onlineUsers.indexOf(userName) > -1
      if(userNameUnique) return;
      socket.userName = userName
      onlineUsers.push(userName)
      userCount++;
      addedUser = true
      socket.emit('login', {
        userCount,
        onlineUsers,
        msgDb
      })
      socket.broadcast.emit('user joined', {
        userName: socket.userName,
        userCount
      })
    })
    socket.on('disconnect', () => {
      if(addedUser) {
        --userCount
        onlineUsers = onlineUsers.filter(e => e !== socket.userName)
        socket.broadcast.emit('user left', {
          userName: socket.userName,
          onlineUsers,
          userCount
        })
      }
    })

    socket.on('new message', (data) => {
      if(!addedUser) return
      let newMsg = {
        userName: socket.userName,
        msg: data
      }
      msgDb.push(newMsg)
      socket.emit('send message', {
        msgDb
      })
      socket.broadcast.emit('new message', {
        msgDb
      })
    })
    socket.on('typing', () => {
      console.log(`user ${socket.userName} typing`)
      socket.broadcast.emit('typing', {
        userName:socket.userName
      })
    })
    socket.on('stop typing', () => {
      console.log(`user ${socket.userName} stopped typing`)
      socket.broadcast.emit('stop typing', {
        userName: ''
      })
    })

  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
