export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET_COUNT = "RESET_COUNT"
export const INCREMENT_BY = "INCREMENT_BY"

export const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}

export const resetCounter = () => {
  return {
    type: RESET_COUNT
  }
}

export const incrementBy = (num = 7) => {
  return {
    type: INCREMENT_BY,
    payload: num
  }
}
