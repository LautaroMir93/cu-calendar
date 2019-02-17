import React from 'react'
import { Row, Tooltip } from 'antd'
import './styles.scss'


const Event = (props) => {
  const getEventText = () => {
    return `${props.name} - ${props.time}hs`
  }

  return (
    <Row
      key={props.id}
      type='flex'
      className='event-container'
      onClick={props.onClick}
      style={props.color ? { backgroundColor: props.color } : null}
    >
      <Tooltip title={ getEventText() } placement="top">
        <span>
          { getEventText() }
        </span>
      </Tooltip>
    </Row>
  )
}

export default Event