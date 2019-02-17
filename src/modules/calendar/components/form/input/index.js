import React, { PureComponent } from 'react'
import { CompactPicker } from 'react-color';
import { Input, Row, DatePicker, TimePicker } from 'antd'
import { DATE_FORMAT, TIME_FORMAT } from 'modules/constants'
import './styles.scss'

class FormInput extends PureComponent {
  getInput() {
    const { type } = this.props
    switch (type) {
      case 'text':
        return (
          <Input
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
          />
        )

      case 'color':
        return (
          <Row className='color-picker-container'>
            <CompactPicker color={this.props.value} onChangeComplete={this.props.onChange}/>
          </Row>
        )

      case 'date':
        return (
          <DatePicker
            value={this.props.value}
            onChange={this.props.onChange}
            format={DATE_FORMAT}
            allowClear={false}
          />
        )

      case 'time':
        return (
          <TimePicker
            value={this.props.value}
            format={TIME_FORMAT}
            onChange={this.props.onChange}
            allowClear={false}
          />
        )
    
      default:
        return null
    }
  }

  render() {
    return (
      <Row type='flex' className={`input-container${this.props.className ? ` ${this.props.className}` : ''}`}>
        <span className='label'>
          {`${this.props.label}`}
        </span>
        {this.getInput()}
      </Row>
    )
  }
}

export default FormInput