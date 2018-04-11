import ChatBox from '../components/Chat_box'
import App from '../components/App'
import {Container, Row, Col} from 'react-grid-system'
import { Component } from 'react'

let messages = []

export default class extends Component {
  render() {
    return (
      <App>
        <Row style={{marginLeft: 0, marginRight: 0}}>
          <Col xs={12} md={8} style={{background: '#266e34', margin: 0 }}>
            <ChatBox messages={messages}/>
          </Col>
          <Col xs={0} md={4} style={{background: 'white', margin: 0}}>
            <div style={{widt: '100%', height: '100%', background: 'white'}} />
          </Col>
        </Row>
      </App>
    )
  }
}
