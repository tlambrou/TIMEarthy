import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
  constructor(props) {
    super(props)
    var textArea
  }

  textAreaAdjust() {
    this.textArea = document.getElementById('invisiform')
    console.log("scrollHeight is this: ", this.textArea)

    this.textArea.style.height =  "1px"
    this.textArea.style.height = `${( 25 + this.textArea.scrollHeight )}px`
    console.log("Height is this: ", this.textArea.style.height)

  }

  displayFormattedTime() {
    const seconds = this.props.count % 60
    const minutes = Math.floor(this.props.count / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    if (days > 0){
      return `${days}d ${hours}h ${minutes}m ${seconds}s`
    } else if (hours > 0){
      return `${hours}h ${minutes}m ${seconds}s`
    } else if (minutes > 0){
      return `${minutes}m ${seconds}s`
    } else {
      return `${seconds}s`
    }
  }

  displayStartStopButton() {
    switch (this.props.isRunning) {
      case true:
        return  <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.stopCounter()} }><i className="nc-icon nc-button-pause"></i></button>
      case false:
        return <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.startCounter()} }><i className="nc-icon nc-button-play"></i></button>
    }
  }

  render() {

    var styles = {
      cardColor: {
        backgroundColor: `hsl(${(this.props.count < 114) ? ((this.props.count) + 14) : (114)}, 90%, 46%)`
      }
    }

    return (
      <div className="col-lg-4">
        <div className="card card-with-shadow" data-color="blue" style={styles.cardColor}>
          <div className="card-body">
            <textarea id={`invisiform-${this.props.index}`} onChange={(e) => {this.props.changeLabel(this.props.index, e.target.value)}} type="text" className="card-category form-control invisiform" placeholder={this.props.label}/>
            <h1 className="card-title">{this.displayFormattedTime()}</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{width: `${ this.props.count }%`}} aria-valuenow={this.props.count} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="card-footer">
            {this.displayStartStopButton()}
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.incrementCounter()} }><i className="nc-icon nc-minimal-up"></i></button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.decrementCounter()} }><i className="nc-icon nc-minimal-down"></i></button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.resetCounter()} }><i className="nc-icon nc-refresh-69"></i></button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.incrementBy()} }>+7s</button>
            <button type="button" className="btn btn-magnify btn-round btn-just-icon" onClick={ () => {this.props.removeCounter()} }><i className="nc-icon nc-simple-remove"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
