export const types = {
  ADD_EVENT: 'calendar/ADD_EVENT',
  EDIT_EVENT: 'calendar/EDIT_EVENT',
  DELETE_EVENT: 'calendar/DELETE_EVENT',
}

export const addEvent = (event) => (dispatch) => {
  dispatch({ type: types.ADD_EVENT, payload: event })
}

export const editEvent = (event) => (dispatch) => {
  dispatch({ type: types.EDIT_EVENT, payload: event })
}

export const removeEvent = (id) => (dispatch) => {
  dispatch({ type: types.EDIT_EVENT, payload: { id } })
}