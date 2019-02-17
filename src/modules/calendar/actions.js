export const types = {
  CREATE_EVENT: 'calendar/CREATE_EVENT',
  EDIT_EVENT: 'calendar/EDIT_EVENT',
  DELETE_EVENT: 'calendar/DELETE_EVENT',
}

export const createEvent = (event) => (dispatch) => {
  dispatch({ type: types.CREATE_EVENT, payload: event })
}

export const editEvent = (event, selectedDate) => (dispatch) => {
  dispatch({ type: types.EDIT_EVENT, payload: { ...event, selectedDate } })
}

export const deleteEvent = (id, selectedDate) => (dispatch) => {
  dispatch({ type: types.DELETE_EVENT, payload: { id, selectedDate } })
}