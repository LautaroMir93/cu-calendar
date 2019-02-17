import { connect } from 'react-redux' 
import component from 'modules/calendar/components/form'
import { editEvent, deleteEvent } from 'modules/calendar/actions'

const mapStateToProps = (state) => {
  return {
    title: 'Edit event',
    submitText: 'Edit',
    showDeleteButton: true
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event) => dispatch(editEvent(event)),
    onDelete: (date, id) => dispatch(deleteEvent(date, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)