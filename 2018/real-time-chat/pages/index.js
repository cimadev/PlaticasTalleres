import ChatBox from '../src/ChatBox'
import App from '../src/App'
import { Row, Col} from 'react-grid-system'
import { Component } from 'react'
import io from 'socket.io-client'
let socket

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userCount: 'No users',
      username: '',
      onlineUsers: ['Cimadev'],
      messages: [],
      connected: false,
      userTyping: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  componentDidMount () {
    socket = io()
    socket.on('login', (data) => {
      this.setState({
        userCount: data.userCount,
        onlineUsers: data.onlineUsers,
        messages: data.msgDb,
        connected: true
      })
    })
    socket.on('user joined', (data) => {
      let joined = this.state.onlineUsers.concat(data.userName)
      this.setState({
        userCount: data.userCount,
        onlineUsers: joined
      })
      console.log('User joined: ', data.userName)
    })
    socket.on('user left', (data) => {
      this.setState({
        userCount: data.userCount,
        onlineUsers: data.onlineUsers
      })
    })
    socket.on('new message', (data) => {
      console.log('new message arrived')
      this.setState({
        messages: data.msgDb
      })
    })
    socket.on('typing', (data) => {
      this.setState({
        userTyping: data.userName
      })
    })
    socket.on('stop typing', (data) => {
      this.setState({
        userTyping: ''
      })
    })
    socket.on('send message', (data) => {
      this.setState({
        messages: data.msgDb
      })
    })
  }

  handleUsernameChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleLogin (e) {
    e.preventDefault()
    console.log(`User ${this.state.username} logged in`)
    socket.emit('add user', this.state.username)
  }
  render () {
    return (
      <App>
        <Row style={{marginLeft: 0, marginRight: 0}}>
          <Col xs={8} md={8} style={{background: '#266e34', margin: 0}}>
            <ChatBox socket={socket} connected={this.state.connected} messages={this.state.messages} />
          </Col>
          <Col xs={4} md={4} style={{background: 'white', margin: 0}}>
            <Row>
              <h1>Username</h1>
              <input value={this.state.username} onChange={e => this.handleUsernameChange(e)} />
              <button onClick={this.handleLogin}>Login</button>
            </Row>
            <div style={{widt: '100%', height: '100%', background: 'white'}}>
              <h1>Userlist</h1> <h3>Online users: {this.state.userCount}</h3>
              {
                this.state.onlineUsers.map((username, key) => {
                  return (
                    <li key={key}>{username}</li>
                  )
                })
              }
              <h2>User typing: {this.state.userTyping}</h2>
            </div>
          </Col>
        </Row>
      </App>
    )
  }
}
