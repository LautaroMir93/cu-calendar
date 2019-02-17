import uuid from 'uuid/v4'
import { types } from './actions'
import { DATE_FORMAT, TIME_FORMAT } from 'modules/constants'

const initialState = {
  events: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_EVENT: {
      const { name, date, time, color } = action.payload
      const key = date.format(DATE_FORMAT)
      return {
        ...state,
        events: {
          ...state.events,
          [key]: [...state.events[key] || []]
            .concat({
              id: uuid(),
              name,
              date: key,
              time: time.format(TIME_FORMAT),
              color
            })
        }
      }
    }

    case types.DELETE_EVENT: {
      const { date, id } = action.payload
      return {
        ...state,
        events: {
          ...state.events,
          [date]: [...state.events[date] || []].filter(e => e.id !== id)
        }
      }
    }

    default:
      return state
  }
}