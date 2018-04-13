import React, { Component } from 'react'
import Message from '../component/message'
import MessageInput from '../component/messageInput'
import {Container, Row, Col, Hidden} from 'react-grid-system'

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      typing: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.socket.emit('new message', this.state.inputValue)
    let message = this.refs.message.value;
    this.setState({
      inputValue: ''
    })
  }

  handleInputChange = (event) => {
    this.updateTyping()
    this.setState({ inputValue: event.target.value });
  }

  updateTyping = () => {
    console.log('setting typer')
    let typingMaxTime = 2500 //ms
    if(this.props.connected) {
      if(!this.state.typing) {
        this.setState({
          typing: true
        })
        this.props.socket.emit('typing')
      }
      let lastTypingTime = (new Date()).getTime()
      setTimeout(() => {
        let typingTimer = (new Date().getTime())
        let timeDiff = typingTimer- lastTypingTime
        if (timeDiff >= typingMaxTime && this.state.typing) {
          this.props.socket.emit('stop typing');
          this.setState({
            typing: false
          })
        }
      }, typingMaxTime)
    }
  }

  render () {
    return (
      <div className="wrapper">
        <div ref='chatBox' className="chat-box-container">
          <Row className="Row" style={{marginLeft: 0, marginRight: 0, paddingBottom: 50}}>
            {
              this.props.messages.map((msg, key) => {
                return <Message username={msg.userName} message={msg.msg} />
              })
            }
            <div className='flex-item'>
              {this.props.isTyping}
            </div>
          </Row>
        </div>
        <MessageInput
          handleSubmit={ this.handleSubmit }
          handleInputChange={ this.handleInputChange }
          inputValue={ this.state.inputValue } />
        <style jsx>{`
          .flex-item {
            position: absolute;
             left: 50%;
             top: 90%;
             text-align: center;
             width:546px;
             margin-left: -273px; /*half width*/
             margin-top: -132px; /*half height*/
          }

          .wrapper {
            width: 100%;
            height: 100vh;
          },

          .input-container {
            width: 100%;
          }

          .chat-box-container {
            width: 100%;
            height: 80vh;
            overflow: scroll;
            overflow-x: hidden;
            margin-top: 3%;
            padding-top: 13px;
            background-color: #f1f1f1;
            padding-right: 10px;
            border-radius: 12px;
          }

          /* width */
          ::-webkit-scrollbar {
              width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
              background: #276e34;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #f49320;
            border-radius: 10px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
              background: #b30000;
          }
        `}</style>
      </div>
    )
  }
}
