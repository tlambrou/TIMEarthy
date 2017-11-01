import { INCREMENT, DECREMENT, RESET_COUNT, INCREMENT_BY, ADD_COUNTER } from '../actions'

const counterReducer = (state=[], action) => {
  switch (action.type) {
    case INCREMENT:
      var newState = [...state]
      console.log(action.payload)
      newState[action.payload.index] += 1
      return newState

    case DECREMENT:
      var newState = [...state]
      newState[action.payload.index] -= 1
      return newState

    case RESET_COUNT:
      var newState = [...state]
      newState[action.payload.index] = 0
      console.log(action.payload)
      return newState

    case INCREMENT_BY:
      var newState = [...state]
      console.log(action.payload)
      newState[action.payload.index] += action.payload.num
      return newState

    case ADD_COUNTER:
      return [...state, 0]

    default:
      return state
  }
}

export default counterReducer
