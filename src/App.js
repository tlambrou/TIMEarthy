import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import reducers from './reducers'
import Counter from './components/Counter'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App">
          <Counter />
          <Counter />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App
