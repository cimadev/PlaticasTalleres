import ChatBox from '../src/ChatBox/container/ChatBox'
import App from '../src/App'
import { Row, Col, Hidden} from 'react-grid-system'
import Login from '../src/Login/components/login'
import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
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
      userTyping: '',
      modalVisible: false
    }
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
    this.openModal()
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    console.log(`User ${this.state.username} logged in`)
    socket.emit('add user', this.state.username)
    this.closeModal()
  }

  openModal = () => {
    console.log('activation')
    this.setState({
      modalVisible : true
    })
  }

  closeModal = () => {
    this.setState({
      modalVisible : false
    })
  }

  render () {
    return (
      <div>
        <App>
        <section>
          <Modal visible={this.state.modalVisible} width="400" height="380px" effect="fadeInDown" onClickAway={() => this.closeModal()}>
            <div>
              <Login
                username={this.state.username}
                handleUsernameChange={this.handleUsernameChange}
                handleLogin={this.handleLogin} />
            </div>
          </Modal>
        </section>
          <Row style={{marginLeft: 0, marginRight: 0}}>
            <Col xs={12} md={8} style={{background: '#266e34', margin: 0}}>
              <ChatBox socket={socket} connected={this.state.connected} messages={this.state.messages} />
            </Col>
            <Hidden xs md>
            <Col xs={0} md={4} style={{background: 'white', margin: 0}}>
              <div style={{widt: '100%', height: '100%', background: 'white'}}>
                <h1>Userlist</h1> <h3>Online users: {this.state.userCount}</h3>
                {
                  this.state.onlineUsers.map((username, key) => {
                    return (
                      <li className="list-group-item" key={key}>{username}</li>
                    )
                  })
                }
                <h2>User typing: {this.state.userTyping}</h2>
              </div>
            </Col>
            </Hidden>
          </Row>
        </App>
        <style jsx>{`
          .list-group-item {
            position: relative;
            display: block;
            padding: .75rem 1.25rem;
            margin-bottom: -1px;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,.125);
          }

          .list-group-item:hover {
            z-index: 1;
            text-decoration: none;
          }
        `}
        </style>
      </div>
    )
  }
}
