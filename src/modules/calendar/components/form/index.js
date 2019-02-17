import React, { PureComponent } from 'react'
import { Modal, Button, Row } from 'antd';
import Input from './input'
import moment from 'moment'
import { DATE_FORMAT, TIME_FORMAT } from 'modules/constants'
import './styles.scss'

class EventForm extends PureComponent {
  state = {
    name: this.props.event ? this.props.event.name : null,
    color: this.props.event ? this.props.event.color : '#000000',
    date: this.props.event ? moment(this.props.event.date, DATE_FORMAT) : this.props.selectedDate,
    time: this.props.event ? moment(this.props.event.time, TIME_FORMAT) : null
  }

  handleOk() {
    if (this.props.hide && this.props.onSubmit) {
      this.props.onSubmit(this.state)
      this.props.hide()
    }
  }

  handleCancel() {
    if (this.props.hide) {
      this.props.hide()
    }
  }

  handleDelete() {
    if (this.props.onDelete && this.props.hide) {
      const { date, id } = this.props.event
      this.props.onDelete(date, id)
      this.props.hide()
    }
  }

  getDeleteButton() {
    return this.props.showDeleteButton
      ? (
        <div>
          <Button key='delete' type='danger' onClick={() => this.handleDelete()}>Delete event</Button>
        </div>
      )
      : <div/>
  }

  isSubmitButtonDisabled() {
    const { name, color, date, time } = this.state
    return !(name && color && date && time)
  }

  getFooter() {
    return (
      <Row type='flex' justify="space-between">
        { this.getDeleteButton() }
        <div>
          <Button key='back' onClick={() => this.handleCancel()}>Cancel</Button>
          <Button key='submit' disabled={this.isSubmitButtonDisabled()} type='primary' onClick={() => this.handleOk()}>
            {`${this.props.submitText}`}
          </Button>
        </div>
      </Row>
    )
  }

  render() {
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onCancel={() => this.handleCancel()}
        footer={this.getFooter()}
      >
        <Row type='flex'>
          <Input 
            label='Name' 
            type='text'
            placeholder='Enter event name'
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </Row>
        <Row type='flex'>
          <Input 
            label='Date' 
            type='date'
            placeholder='Enter event date'
            value={this.state.date}
            onChange={date => this.setState({ date })}
            className='input-container-date'
          />
          <Input 
            label='Time' 
            type='time'
            value={this.state.time}
            onChange={time => this.setState({ time })}
            placeholder='Enter event time'
          />
        </Row>
        <Input 
          label='Color' 
          type='color'
          value={this.state.color}
          onChange={(value) => this.setState({ color: value.hex })}
        />
      </Modal>
    )
  }
}

export default EventForm