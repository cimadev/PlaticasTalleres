import React from 'react'
import Message from './message'
import {Container, Row, Col} from 'react-grid-system'

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      messages: this.props.messages
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let username = 'Luis';
    let message = this.refs.message.value;
    this.setState({
          messages: this.state.messages.concat({username, message}),
          inputValue: ''
        });
    }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render () {
    let filteredContacts = this.state.messages;
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="chat-box-container">
            <ul>
              {filteredContacts.map(({username, message}) => {
                          return(
                              <li><span className="span">{message}</span><span className="span-username">{username}</span></li>
                          )
              })}
            </ul>
          </div>
          <Row style={{marginTop: '5%'}}>
            <Col xs={8} md={8} lg={8}>
              <div className="input-container">
                <input type="text"
                  className="input__field input__field--minoru"
                  ref="message"
                  onChange={this.handleInputChange}
                  value={ this.state.inputValue} />
              </div>
            </Col>
            <Col xs={4} md={4} lg={4}>
              <button type="submit" className="button"><span>SEND </span></button>
            </Col>
          </Row>
        </form>
        <style jsx>{`

          .button {
          border-radius: 4px;
          background-color: #f49320;
          border: none;
          color: #FFFFFF;
          text-align: center;
          font-size: 28px;
          padding: 20px 10px 20px 10px;
          width: 100%;
          max-width: 200px;
          transition: all 0.5s;
          cursor: pointer;
          margin: 5px;
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
          	padding: 0.8em;
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

          ul{
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }

          li{
            clear: both;
            padding-top: 20px
            padding-bottom: 20px;
            border-radius: 20px;
            margin-bottom: 2px;
            width: 97%;
            display:inline-block;
            list-style:none;
            margin-top: 10px;
            float: right;
            background: #d2e8d8;
            border-width: medium;
            border-color: #276e34;
            border-style: solid;
            font-family: Helvetica, Arial, sans-serif;
          }
          .span {
            margin-left: 15px;
            float: left;
            width: 85%;
          }
          .span-username {
            float: left;
            width: 85%;
            text-align: right;
          }
        `}
        </style>
      </div>
    )
  }
}
