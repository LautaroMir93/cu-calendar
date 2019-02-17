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

    case types.EDIT_EVENT: {
      const editProperties = () => {
        return { ['prueba']: 'HELLO' }
        const { id, prevDate, name, date, time, color } = action.payload
        const prevKey = prevDate.format(DATE_FORMAT)
        const key = date.format(DATE_FORMAT)
        const dateChanged = prevKey !== key

        if (dateChanged) {

        }

        const eventIndex = [...state.events[key] || []].findIndex(e => e.id === id)
        return {
          [key]: [...state.events[key] || []].map((e, i) => {
            if (i !== eventIndex) {
              return e
            }
            return {
              ...e,
              name,
              date: key,
              time: time.format(TIME_FORMAT),
              color
            }
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