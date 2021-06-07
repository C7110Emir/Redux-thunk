import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux"
import { Provider } from 'react-redux'
import userReducer from "./redux/reducers/userReducer"
import thunk from "redux-thunk"
import logger from "redux-logger"
const store = createStore(userReducer, applyMiddleware(thunk,logger))
//logger is a npm library that helps you to track your redux states
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);