import { INCREMENT, DECREMENT, RESET_COUNT } from '../actions'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state += 1
    case DECREMENT:
      return state -= 1
    case RESET_COUNT:
      return state = 0
    default:
      return state
  }
}

export default counterReducer
