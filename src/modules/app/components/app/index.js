import React, { PureComponent } from 'react'
import Calendar from 'modules/calendar'
import { Row, Col } from 'antd'
import './styles.scss'

class App extends PureComponent {
  render() {
    return (
      <Row className='app-container'>
        <Col span={4}>

        </Col>
        <Col className='calendar-col' span={16}>
          <Calendar

          />
        </Col>
        <Col span={4}>

        </Col>
      </Row>
    );
  }
}

export default App;
