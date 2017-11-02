import React, { Component } from 'react'

class Counter extends Component {

  render() {
    return (
      <div className="col-md-3">
        <div className="card card-just-text card-with-shadow" data-background="color" data-color="orange" >
          <div className="card-body">
            <h1 className="card-title">{this.props.count}</h1>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-magnify btn-just-icon" onClick={ () => {this.props.incrementCounter()} }><i className="nc-icon nc-minimal-up"></i></button>
            <button type="button" className="btn btn-magnify btn-just-icon" onClick={ () => {this.props.decrementCounter()} }><i className="nc-icon nc-minimal-down"></i></button>
            <button type="button" className="btn btn-magnify btn-just-icon" onClick={ () => {this.props.resetCounter()} }><i className="nc-icon nc-refresh-69"></i></button>
            <button type="button" className="btn btn-magnify btn-just-icon" onClick={ () => {this.props.incrementBy()} }>+7</button>
            <button type="button" className="btn btn-magnify btn-just-icon" onClick={ () => {this.props.removeCounter()} }><i className="nc-icon nc-simple-remove"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
