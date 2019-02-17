import uuid from 'uuid/v4'
import { types } from './actions'

const initialState = {
  events: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_EVENT: {
      const { name, date, time, color } = action.payload
      return {
        ...state,
        events: {
          ...state.events,
          [date]: [...state.events[date] || []]
            .concat({ id: uuid(), name, date, time, color })
        }
      }
    }

    case types.EDIT_EVENT: {
      const editProperties = () => {
        const { id: eventId, selectedDate, name, date, time, color } = action.payload
        const dateChanged = selectedDate !== date

        if (dateChanged) {
          return {
            [selectedDate]: state.events[selectedDate].filter(e => e.id !== eventId),
            [date]: [...state.events[date] || []].concat({ id: eventId, name, date, time, color })
          }
        }

        return {
          [date]: state.events[date].map(e => {
            if (e.id !== eventId) {
              return e
            }
            return { ...e, name, date, time, color }
          })
        }
      }

      return {
        ...state,
        events: {
          ...state.events,
          ...editProperties()
        }
      }
    }

    case types.DELETE_EVENT: {
      const { selectedDate, id } = action.payload
      return {
        ...state,
        events: {
          ...state.events,
          [selectedDate]: [...state.events[selectedDate] || []].filter(e => e.id !== id)
        }
      }
    }

    default:
      return state
  }
}