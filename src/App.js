import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import reducers from './reducers'
import Counters from './components/Counters'
import './App.css'

import { incrementCounter, incrementAll } from './actions';

const store = createStore(reducers)

setInterval(() => {
  store.dispatch( incrementAll() ) // ...
}, 1000)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counters />
        </div>
      </Provider>
    );
  }
}

export default App
