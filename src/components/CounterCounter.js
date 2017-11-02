import React, { Component } from 'react'

class CounterCounter extends Component {

  render() {
    return (
      <h4>Number of Counters: { this.props.count }</h4>
    )
  }
}

export default CounterCounter
