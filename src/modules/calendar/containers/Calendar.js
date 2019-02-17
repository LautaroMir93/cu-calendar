import { connect } from 'react-redux' 
// import { bindActionCreators } from 'redux'
import component from 'modules/calendar/components/calendar'
// import * as actions from ''

const mapStateToProps = (state) => {
  return {
    events: state.calendar.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(component); 