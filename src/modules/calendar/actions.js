export const types = {
  CREATE_EVENT: 'calendar/CREATE_EVENT',
  EDIT_EVENT: 'calendar/EDIT_EVENT',
  DELETE_EVENT: 'calendar/DELETE_EVENT',
}

export const createEvent = (event) => (dispatch) => {
  dispatch({ type: types.CREATE_EVENT, payload: event })
}

export const editEvent = (event) => (dispatch) => {
  dispatch({ type: types.EDIT_EVENT, payload: event })
}

export const deleteEvent = (date, id) => (dispatch) => {
  dispatch({ type: types.DELETE_EVENT, payload: { date, id } })
}