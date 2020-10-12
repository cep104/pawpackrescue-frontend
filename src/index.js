import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
// import caretakerReducer from './reducers/caretakerReducer'
import App from './App';
import {rootReducer} from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
//  store is where your storing your data globally 
ReactDOM.render(
  <Provider store={store}>
      <Router>
      <App />
      </Router>
  </Provider>
  ,
  document.getElementById('root')

);


