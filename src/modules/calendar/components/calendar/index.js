import React, { PureComponent } from 'react'
import { Calendar as AntCalendar, Card, Row } from 'antd'
import CreateEventForm from 'modules/calendar/containers/create'
import EditEventForm from 'modules/calendar/containers/edit'
import Event from 'modules/calendar/components/event'
import { DATE_FORMAT, TIME_FORMAT } from 'modules/constants'
import moment from 'moment'
import './styles.scss'

class Calendar extends PureComponent {
  state = {
    createFormVisible: false,
    editFormVisible: false,
    closingCreateForm: false,
    closingEditForm: false,
    selectedDate: null,
    event: null
  }

  selectDate(date) {
    this.setState({
      createFormVisible: true,
      selectedDate: date
    })
  }

  getEventsForDate(date) {
    const { events } = this.props
    const eventsForDate = events[date.format(DATE_FORMAT)]
    return eventsForDate
      ? eventsForDate
        .sort((e1, e2) =>
          moment(e1.time, TIME_FORMAT)
            .diff(moment(e2.time, TIME_FORMAT), 'minutes')
        )
      : []
  }

  dateCellRender(date) {
    const events = this.getEventsForDate(date)
    return (
      <Row>
        {
          events.map(event =>
            <Event
              key={event.id}
              id={event.id}
              name={event.name}
              time={event.time}
              color={event.color}
              onClick={e => {
                e.stopPropagation()
                this.setState({ event }, () => this.showEditForm())
              }}
            />
          )
        }
      </Row>
    )
  }

  renderCreateForm() {
    return (
      <CreateEventForm
        visible={this.state.createFormVisible}
        selectedDate={this.state.selectedDate}
        show={() => this.showCreateForm()}
        hide={() => this.hideCreateForm()}
      />
    )
  }

  showCreateForm() {
    this.setState({
      createFormVisible: true,
    })
  }

  hideCreateForm() {
    this.setState({
      createFormVisible: false,
      closingCreateForm: true
    })
    setTimeout(() => { this.setState({ closingCreateForm: false }) }, 500)
  }

  renderEditForm() {
    return (
      <EditEventForm
        visible={this.state.editFormVisible}
        event={this.state.event}
        show={() => this.showEditForm()}
        hide={() => this.hideEditForm()}
      />
    )
  }

  showEditForm() {
    this.setState({
      editFormVisible: true
    })
  }

  hideEditForm() {
    this.setState({
      editFormVisible: false,
      closingEditForm: true
    })
    setTimeout(() => { this.setState({ closingEditForm: false }) }, 500)
  }

  render() {
    return (
      <Card className='calendar-container'>
        <AntCalendar
          onSelect={date => this.selectDate(date)}
          dateCellRender={(date) => this.dateCellRender(date)}
        />
        {(this.state.closingCreateForm || this.state.createFormVisible) && this.renderCreateForm()}
        {(this.state.closingEditForm || this.state.editFormVisible) && this.renderEditForm()}
      </Card>
    )
  }
}

export default Calendar

