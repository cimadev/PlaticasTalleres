import React, { Component } from 'react'
import Message from '../component/message'
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
          <form onSubmit={this.handleSubmit}>
            <Row style={{marginTop: '3%'}}>
              <Col xs={8} md={8} lg={8}>
                <div className="input-container">
                  <input type="text"
                    className="input__field input__field--minoru"
                    ref="message"
                    onChange={this.handleInputChange}
                    value={ this.state.inputValue} />
                </div>
              </Col>
              <Col xs={4} md={4} lg={4} style={{paddingLeft: 0}}>
                <button type='submit' className="button"><span>SEND </span></button>
              </Col>
            </Row>
          </form>
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
            .button {
              border-radius: 4px;
              background-color: #f49320;
              border: none;
              color: #FFFFFF;
              text-align: center;
              font-size: 28px;
              max-height: 65px;
              margin-top: 10px;
              padding-top: 18px;
              padding-right: 10px;
              padding-left: 10px;
              padding-bottom: 13px;
              width: 100%;
              max-width: 200px;
              transition: all 0.5s;
              cursor: pointer;
            }

            .button span {
              cursor: pointer;
              display: inline-block;
              position: relative;
              transition: 0.5s;
            }

            span {
              margin: 0px;
              font-weight: 800;
            }

            .button span:after {
              content: '\00bb';
              position: absolute;
              opacity: 0;
              top: 0;
              right: -20px;
              transition: 0.5s;
              align: center;
            }

            .button:hover span {
              padding-right: 25px;
            }

            .button:hover span:after {
              opacity: 1;
              right: 0;
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

            input {
              height: 34px;
              width: 100%;
              border-radius: 3px;
              border: 1px solid transparent;
              border-top: none;
              border-bottom: 1px solid #DDD;
              box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #red, 0 1px 0 #red;
            }

            .input__field {
            	float: left;
            	padding-top: .8em;
              padding-bottom: .8em;
              width: 100%;
              margin-top: 10px;
              font-size: 17px;
            	border: none;
            	border-radius: 4px;
            	background: #f0f0f0;
            	color: #black;
            	font-weight: bold;
            	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            	-webkit-appearance: none; /* for box shadows to show on iOS */
            }
          `}</style>
      </div>
    )
  }
}
