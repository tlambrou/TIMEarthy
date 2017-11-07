import { INCREMENT, DECREMENT, RESET_COUNT, INCREMENT_BY, ADD_COUNTER, REMOVER_COUNTER, CHANGE_LABEL, INCREMENT_ALL } from '../actions'

const counterReducer = (state=[], action) => {
  const newState = [...state]
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
      const newCounter = { count: 0, label: labelText }
      return [...state, newCounter]
    case REMOVER_COUNTER:
      newState.splice(action.payload.index, 1)
      return newState
    case CHANGE_LABEL:
      newState[action.payload.index].label = action.payload.label
      return newState
    case INCREMENT_ALL:
        return state.map((counter) => {
          console.log(counter.count)
          const newCount = counter.count + 1
          console.log(newCount)
          const newState = { count: newCount, label: counter.label}
          return newState
        })
    default:
      return state
  }
}

export default counterReducer
