import { Component } from 'react'
import io from 'socket.io-client'

export default class Text extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userCount: 'No users',
      username: '',
      onlineUsers:['Cimadev'],
      messages: [],
      msgInput: '',
      typing: false,
      connected: false,
      userTyping: ''
    }
    this.handeChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.updateTyping = this.updateTyping.bind(this)
  }

  componentDidMount() {
    this.socket = io()
    this.socket.on('login', (data) => {
      this.setState({
        userCount: data.userCount,
        onlineUsers: data.onlineUsers,
        messages: data.msgDb,
        connected: true
      })
    })
    this.socket.on('user joined', (data) => {
      let joined = this.state.onlineUsers.concat(data.userName)
      this.setState({
        userCount: data.userCount,
        onlineUsers: joined
      })
      console.log('User joined: ', data.userName)
    })
    this.socket.on('user left', (data) => {
      this.setState({
        userCount: data.userCount,
        onlineUsers: data.onlineUsers
      })
    })
    this.socket.on('send message', (data) => {
      this.setState({
        messages: data.msgDb,
      })
    })
    this.socket.on('new message', (data) => {
      this.setState({
        messages: data.msgDb,
      })
    })
    this.socket.on('typing', (data) => {
      this.setState({
        userTyping: data.userName
      })
    })
    this.socket.on('stop typing', (data) => {
      this.setState({
        userTyping: ''
      })
    })
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit(e) {
    console.log(`User ${this.state.username} logged in`)
    e.preventDefault()
    this.socket.emit('add user', this.state.username)
  }

  handleMessageChange(e) {
    e.preventDefault()
    this.updateTyping()
    this.setState({
      msgInput: e.target.value
    })
  }

  sendMessage() {
    this.socket.emit('new message', this.state.msgInput)
    this.setState({
      msgInput: ''
    })
  }

  updateTyping() {
    console.log('setting typer')
    let typingMaxTime = 600 //ms
    if(this.state.connected) {
      if(!this.state.typing) {
        this.setState({
          typing: true
        })
        this.socket.emit('typing')
      }
      let lastTypingTime = (new Date()).getTime()
      setTimeout(() => {
        let typingTimer = (new Date().getTime())
        let timeDiff = typingTimer- lastTypingTime
        if (timeDiff >= typingMaxTime && this.state.typing) {
          this.socket.emit('stop typing');
          this.setState({
            typing: false
          })
        }
      }, typingMaxTime)
    }
  }

  render() {
    return (
      <div>
        CimaChat - {this.state.userCount} online
        <input value={this.state.username} onChange={e => this.handleChange(e)}/>
        <button onClick={this.handleSubmit}>Login</button>
        <br />
        Write message: <br /> <input value={this.state.msgInput} onChange={e => this.handleMessageChange(e)}/>
        <button onClick={this.sendMessage}>send</button>
        <h1>Userlist</h1>
        {
          this.state.onlineUsers.map((username, key) => {
            return (
              <li key={key}>{username}</li>
            )
          })
        }
        <h1>Messages</h1> <h2>User typing: {this.state.userTyping}</h2>
        {
          this.state.messages.map((msg, key) => {
            return (
              <li key={key}>{msg.userName} - {msg.msg}</li>
            )
          })
        }
      </div>
    )
  }
}
