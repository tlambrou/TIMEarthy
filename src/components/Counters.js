import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy, addCounter, removeCounter } from '../actions';
import Counter from './Counter'
import CounterCounter from './CounterCounter'

class Counters extends Component {

  drawCounters() {
    return this.props.counters.map((count, index) => {
      return (
        <Counter
          key={index}
          index={index}
          count={count}
          incrementCounter={() => this.props.incrementCounter(index)}
          decrementCounter={() => this.props.decrementCounter(index)}
          resetCounter={() => this.props.resetCounter(index)}
          incrementBy={() => this.props.incrementBy(index, 7)}
          removeCounter={() => this.props.removeCounter(index)}
          />
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="info">
          <div className="icon icon-danger">
            <i className="nc-icon nc-time-alarm"></i>
          </div>
          <div className="description">
            <CounterCounter count={ this.props.counters.length ? this.props.counters.length : 0 } />
            <button type="button" className="btn btn-magnify" onClick={() => this.props.addCounter() }>
              <i className="nc-icon nc-simple-add">
              </i> Create Counter
            </button>
          </div>
        </div>
        <div className="row">
          {this.drawCounters()}
        </div>
      </div>
    )
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
    incrementBy,
    addCounter,
    removeCounter
  }
)(Counters)
