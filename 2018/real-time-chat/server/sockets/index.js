exports = module.exports = (io, onlineUsers, userCount, msgDb) => {
  io.on('connect', socket => {
    let addedUser = false //  declared to check if this socket has added a user
    socket.on('add user', (userName) => {
      if (addedUser) return //eliminates ability for this socket user to declare another user
      let userNameUnique = onlineUsers.indexOf(userName) > -1 //check if username is in user static db
      if (userNameUnique) return //if username is already added exit this function
      socket.userName = userName //username is new add this to socket
      onlineUsers.push(userName) //push to username list
      userCount++ //increment userCount
      addedUser = true //change addedUser to true becouse user has alreadu been added
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
