import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy } from '../actions';
import Counter from './Counter'

class Counters extends Component {

  drawCounters() {
    this.props.counters.map((count, index) => {
      return <Counter
            key={index}
            index={index}
            count={count}
            incrementCounter={() => incrementCounter(index)}
            decrementCounter={() => decrementCounter(index)}
            resetCounter={() => resetCounter()}
            incrementBy={() => incrementBy(7)}
        />
    })
  }

  render() {
    return (
      <div>
        <button onClick={}>Create Counter</button>
        {this.drawCounters()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { counters: state.counters }
}

export default connect(
  mapStateToProps,
  {
    incrementCounter,
    decrementCounter,
    resetCounter,
    incrementBy
  }
)(Counters)
