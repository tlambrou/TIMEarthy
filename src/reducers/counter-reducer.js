import {
  INCREMENT,
  DECREMENT,
  RESET_COUNT,
  INCREMENT_BY,
  ADD_COUNTER,
  REMOVER_COUNTER,
  CHANGE_LABEL,
  INCREMENT_ALL,
  START_COUNTER,
  STOP_COUNTER
 } from '../actions'

const counterReducer = (state=[], action) => {
  // Declare a shallow copy of the state
  const newState = [...state]
  // Choose which action is run
  switch (action.type) {
    case INCREMENT:
      newState[action.payload.index].count += 1
      return newState
    case DECREMENT:
      newState[action.payload.index].count -= 1
      return newState
    case RESET_COUNT:
      newState[action.payload.index].count = 0
      return newState
    case INCREMENT_BY:
      newState[action.payload.index].count += action.payload.num
      return newState
    case ADD_COUNTER:
      const index = state.length + 1
      const labelText = "Counter " + index.toString()
      const newCounter = { count: 0, label: labelText, isRunning: true }
      return [...state, newCounter]
    case REMOVER_COUNTER:
      newState.splice(action.payload.index, 1)
      return newState
    case CHANGE_LABEL:
      newState[action.payload.index].label = action.payload.label
      return newState
    case INCREMENT_ALL:
        return state.map((counter) => {
          switch (counter.isRunning) {
            case true:
              const newCount = counter.count + 1
              return {...counter, count: newCount}
            case false:
              return {...counter}
          }
        })
    case START_COUNTER:
      newState[action.payload.index].isRunning = true
      return newState
    case STOP_COUNTER:
      newState[action.payload.index].isRunning = false
      return newState
    default:
      return state
  }
}

export default counterReducer
