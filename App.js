import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterApp from './src/component/CounterApp';
import  { counterReducer } from './src/redux/reducers/reducer';
import React, { Component } from 'react'

// const myLogger = (store)=>{
//   return (next) => {
//     return (action) => {
//       console.log("middleWare Run")
//       return next(action  )
//     }
//   }
// }

const myLogger = store => next => action => {
     
      return next(action  )
}

const decrementAtTen = store => next => action => {
  if(store.getState().counter >= 10){
    return next({type:"DECREMENT"})
  }
  return next(action)
}

const store = createStore(counterReducer,applyMiddleware(myLogger,decrementAtTen))

export class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <CounterApp/>
      </Provider>
    )
  }
}

export default App

