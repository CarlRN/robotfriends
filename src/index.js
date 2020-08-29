import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './containers/App';

import {Provider} from 'react-redux'; //it's for pass down easly the store (state) in components...
//import {connect} from 'react-redux'; //for avoid  using redux subscript, connect is an optimized way
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots,requestRobots} from './reducers.js' ;

import { createLogger } from 'redux-logger'; //middleware

import thunkMiddleware from 'redux-thunk'; //handle asynchronous actions


const logger = createLogger();

const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));


ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>  
 ,
  document.getElementById('root')
);

