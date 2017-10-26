import { INCREMENT, DECREMENT, RESET_COUNT, INCREMENT_BY } from '../actions'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state += 1
    case DECREMENT:
      return state -= 1
    case RESET_COUNT:
      return state = 0
    case INCREMENT_BY:
      return state += action.payload
    default:
      return state
  }
}

export default counterReducer
