import React from 'react'
import Message from '../component/message'
import UserMessage from '../component/userMessage'
import { Row } from 'react-grid-system'

const ChatBox = (props) => (
  <div className='chat-box-container'>
    <Row className='Row' style={{marginLeft: 0, marginRight: 0, paddingBottom: 50}}>
      {
        props.messages.map((msg, key) => {
          return msg.userName === props.username
            ? <UserMessage key={key} username={msg.userName} message={msg.msg} />
            : <Message key={key} username={msg.userName} message={msg.msg} />
        })
      }
      <div className='flex-item'>
        {props.isTyping}
      </div>
      <div ref={props.endMessages} id='endOfMessages'>
        <br />
        <br />
        <br />
        <br />
      </div>
    </Row>
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

      .chat-box-container {
        width: 100%;
        height: 63vh;
        overflow: scroll;
        overflow-x: hidden;
        margin-top: 1.5%;
        padding-top: 13px;
        background-color: #f1f1f1;
        padding-right: 10px;
        border-radius: 12px;
      }

      ::-webkit-scrollbar {
          width: 10px;
      }

      ::-webkit-scrollbar-track {
          background: #276e34;
      }

      ::-webkit-scrollbar-thumb {
        background: #f49320;
        border-radius: 10px;
      }
    `}</style>
  </div>
)

export default ChatBox
