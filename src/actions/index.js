export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET_COUNT = "RESET_COUNT"
export const INCREMENT_BY = "INCREMENT_BY"
export const ADD_COUNTER = "ADD_COUNTER"
export const REMOVER_COUNTER = "REMOVER_COUNTER"
export const CHANGE_LABEL = "CHANGE_LABEL"
export const INCREMENT_ALL = "INCREMENT_ALL"
export const START_COUNTER = "START_COUNTER"
export const STOP_COUNTER = "STOP_COUNTER"


export const incrementCounter = (index = 0) => {
  return {
    type: INCREMENT,
    payload: {
      index: index
    }
  }
}

export const decrementCounter = (index = 0) => {
  return {
    type: DECREMENT,
    payload: {
      index: index
    }
  }
}

export const resetCounter = (index = 0) => {
  return {
    type: RESET_COUNT,
    payload: {
      index: index
    }
  }
}

export const incrementBy = (index = 0, num = 7) => {
  return {
    type: INCREMENT_BY,
    payload: {
      index: index,
      num: num
    }
  }
}

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
  }
}

export const removeCounter = (index) => {
  return {
    type: REMOVER_COUNTER,
    payload: {
      index: index
    }
  }
}

export const changeLabel = (index, label = "Counter") => {
  return {
    type: CHANGE_LABEL,
    payload: {
      index: index,
      label: label
    }
  }
}

export const incrementAll = () => {
  return {
    type: INCREMENT_ALL
  }
}

export const startCounter = (index) => {
  return {
    type: START_COUNTER,
    payload: { index }
  }
}

export const stopCounter = (index) => {
  return {
    type: STOP_COUNTER,
    payload: { index }
  }
}
