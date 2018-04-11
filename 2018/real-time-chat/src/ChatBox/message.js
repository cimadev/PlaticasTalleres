import React, { Component } from 'react'

export default class Message extends Component {
  render () {
    return (
      <div className='container'>
        <p>{this.props.message}</p>
        <span className='time-right'>{this.props.username}</span>
        <style jsx>{`
          .messageBox {
            width: 100%;
            height: 100%;
          }
          p {
            font-size: large;
          }
          .container {
            border: 2px solid #dedede;
            background-color: #f1f1f1;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
            width: 100%;
            margin-right: 10px;
          }
          .time-right {
            float: right;
            color: #aaa;
          }
          .container::after {
              content: "";
              clear: both;
              display: table;
          }

          .container img {
              float: left;
              max-width: 60px;
              width: 100%;
              margin-right: 20px;
              border-radius: 50%;
          }
        `}
        </style>
      </div>
    )
  }
}
