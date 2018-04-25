import React from 'react'
import { Row, Col } from 'react-grid-system'

const MessageInput = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <Row style={{marginTop: '1.5%'}}>
        <Col xs={9} md={9} lg={9} >
          <div>
            <input type='text'
              className='input__field'
              onChange={props.handleInputChange}
              value={props.inputValue} />
          </div>
        </Col>
        <Col xs={3} md={3} lg={3} style={{paddingLeft: 0}}>
          <div style={{marginTop: 10}}>
            <button type='submit' className='button yellow'><span>✔</span>SEND</button>
          </div>
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
        color: red;
        background-color: red;
        display: inline-block;
        height: 62px;
        line-height: 50px;
        padding-right: 30px;
        padding-left: 70px;
        font-size: 25px;
        position: relative;
        background-color:rgb(41,127,184);
        color:rgb(255,255,255);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-radius: 5px;
        text-shadow:0px 1px 0px rgba(0,0,0,0.5);
        box-shadow:0px 2px 2px rgba(0,0,0,0.2);
      }

      .button span {
        display: initial;
        font-size: 25px;
        position: absolute;
        top: 0;
        height: 57px;
        left: 0;
        width: 50px;
        background-color:rgba(0,0,0,0.5);
      }

      .button:hover span, .button.active span {
        background-color: #286e36;
        border-right: 1px solid  rgba(0,0,0,0.3);
      }

      .button:active {
        margin-top: 2px;
        margin-bottom: 13px;
      }

      .button.yellow {
        background: #f49320;
      }

      @media only screen and (max-width: 600px) {
      .button span  {
        display: none;
      }
      .button {
        width: 100%;
        padding: 0;
      }
    }
    `}</style>
  </div>
)

export default MessageInput
