import React from 'react'

const UserMessage = (props) => (
  <div className='container'>
    <p>{props.message}</p>
    <span className='time-right'>{props.username}</span>
    <style jsx>{`
          p {
            font-size: large;
            margin-left: 20px;
          }
          .container {
             clear: both;
              border-radius: 20px;
              margin-bottom: 2px;
              width: 97%;
              display:inline-block;
              list-style:none;
              margin-top: 10px;
              margin-left: 18px;
              margin-right: 18px;
              float: right;
              background: #e8e7d2;
              font-family: Helvetica, Arial, sans-serif;
          }
          .time-right {
            float: right;
            color: #f49320;
            margin-right: 20px;
            margin-bottom: 10px;
          }
          .container::after {
              content: "";
              clear: both;
              display: table;
          }
        `}
    </style>
  </div>
)

export default UserMessage
