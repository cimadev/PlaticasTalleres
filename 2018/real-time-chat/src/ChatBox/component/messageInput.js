import React from 'react'
import { Row, Col } from 'react-grid-system'

const MessageInput = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <Row style={{marginTop: '1.5%'}}>
        <Col xs={8} md={8} lg={8}>
          <div className='input-container'>
            <input type='text'
              className='input__field input__field--minoru'
              ref='message'
              onChange={props.handleInputChange}
              value={props.inputValue} />
          </div>
        </Col>
        <Col xs={4} md={4} lg={4} style={{paddingLeft: 0}}>
          <button type='submit' className='button'><span>SEND </span></button>
        </Col>
      </Row>
    </form>
    <style jsx>{`
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

      span {
        margin: 0px;
        font-weight: 800;
      }

      .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
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
    `}</style>
  </div>
)

export default MessageInput
