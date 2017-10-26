import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import reducers from './reducers'
import Counter from './components/Counter'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Provider store={createStore(reducers)}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App
