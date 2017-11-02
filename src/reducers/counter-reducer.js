import { INCREMENT, DECREMENT, RESET_COUNT, INCREMENT_BY, ADD_COUNTER, REMOVER_COUNTER } from '../actions'

const counterReducer = (state=[], action) => {
  switch (action.type) {
    case INCREMENT:
      var newState = [...state]
      newState[action.payload.index] += 1
      return newState
      break
    case DECREMENT:
      var newState = [...state]
      newState[action.payload.index] -= 1
      return newState
      break
    case RESET_COUNT:
      var newState = [...state]
      newState[action.payload.index] = 0
      return newState
      break
    case INCREMENT_BY:
      var newState = [...state]
      newState[action.payload.index] += action.payload.num
      return newState
      break
    case ADD_COUNTER:
      return [...state, 0]
      break
    case REMOVER_COUNTER:
      newState = [...state]
      newState.splice(action.payload.index, 1)
      return newState
      break
    default:
      return state
      break
  }
}

export default counterReducer
