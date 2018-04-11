exports = module.exports = (io, onlineUsers, userCount, msgDb) => {
  io.on('connect', socket => {
    let addedUser = false
    socket.on('add user', (userName) => {
      if (addedUser) return
      let userNameUnique = onlineUsers.indexOf(userName) > -1
      if (userNameUnique) return
      socket.userName = userName
      onlineUsers.push(userName)
      userCount++
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
      if (addedUser) {
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
      if (!addedUser) return
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
        userName: socket.userName
      })
    })
    socket.on('stop typing', () => {
      console.log(`user ${socket.userName} stopped typing`)
      socket.broadcast.emit('stop typing', {
        userName: ''
      })
    })
  })
}
