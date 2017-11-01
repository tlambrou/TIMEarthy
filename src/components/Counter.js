import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy } from '../actions';

class Counter extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={ this.props.incrementCounter }>Up</button>
        <button onClick={ this.props.decrementCounter }>Down</button>
        <button onClick={ this.props.resetCounter }>Reset</button>
        <button onClick={ this.props.incrementBy }>+7</button>
      </div>
    );
  }
}

export default Counter
