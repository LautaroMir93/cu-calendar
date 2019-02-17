import { connect } from 'react-redux' 
import component from 'modules/calendar/components/form'
import { createEvent } from 'modules/calendar/actions'

const mapStateToProps = (state) => {
  return {
    title: 'Create a new event',
    submitText: 'Create'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event) => dispatch(createEvent(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)