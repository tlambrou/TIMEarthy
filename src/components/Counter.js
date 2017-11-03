import React, { Component } from 'react'

class Counter extends Component {

  render() {
    var styles = {
      cardColor: {
        backgroundColor: `hsl(${(this.props.count < 114) ? ((this.props.count) + 14) : (114)}, 90%, 60%)`
      },
    }
    return (
      <div className="col-md-3">
        <div className="card card-just-text card-with-shadow" style={styles.cardColor}>
          <div className="card-body">
            <h1 className="card-title">{this.props.count}</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{width: `${ this.props.count }%`}} aria-valuenow={this.props.count} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.incrementCounter()} }><i className="nc-icon nc-minimal-up"></i></button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.decrementCounter()} }><i className="nc-icon nc-minimal-down"></i></button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.resetCounter()} }><i className="nc-icon nc-refresh-69"></i></button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.incrementBy()} }>+7</button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.removeCounter()} }><i className="nc-icon nc-simple-remove"></i></button>
          </div>
        </div>
      </div>
    )
  }

}

export default Counter
