import ChatBox from '../src/ChatBox/container/ChatBox'
import App from '../src/App'
import { Row, Col, Hidden} from 'react-grid-system'
import Login from '../src/Login/components/login'
import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
import io from 'socket.io-client'
import TypingIcon from '../src/Icons/components/typing'
import HamburguerIcon from '../src/Icons/components/hamburguer'
import Drawer from 'react-motion-drawer'
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
      isTyping: false,
      modalVisible: false,
      open: false
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
        userTyping: data.userName,
        isTyping: true
      })
    })
    socket.on('stop typing', (data) => {
      this.setState({
        userTyping: '',
        isTyping: false
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

  handleToogle = () => {
    this.setState({
      open : true
    })
  }

  render () {
    const isTyping = this.state.isTyping ? (
      <div>
        <TypingIcon color='green' size='60'/>
        <br/>
      </div>
      ) : (
        <div>
        </div>
      )
      const style = {
        backgroundColor: 'white'
      }
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
          <div className="row-wrapper">
            <Row>
              <Col xs={12} md={12} style={{background: '#266e34', margin: 0}}>
                  <div onClick={this.handleToogle} style={{marginTop: 18}}>
                    <HamburguerIcon size='30'/>
                  </div>
                  <ChatBox isTyping={isTyping} socket={socket} connected={this.state.connected} messages={this.state.messages} username={this.state.username}/>
              </Col>
              <Drawer width={180} open={this.state.open} onChange={open => this.setState({ open: open })} right={true} drawerStyle={style}>
                {
                  this.state.onlineUsers.map((username, key) => {
                    return (
                      <li className="list-group-item" key={key}>{username}</li>
                    )
                  })
                }
              </Drawer>
            </Row>
          </div>
        </App>
        <style jsx>{`

          drawer {
            background-color: red;
          }
          .row-wrapper {
            margin-left: 15px;
            margin-right: 15px;
          }
          @media only screen and (min-width: 800px) {
              .row-wrapper {
                  margin-left: 135px;
                  margin-right: 135px;
              }
          }
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
