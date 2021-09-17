import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { rootreducer } from './Redux/RootReducer';
import { buynewlatop } from './Redux/ActionCreator';
const redux = require('redux')
const createStore = require('redux').createStore



const mystore = createStore(rootreducer)


console.log(mystore)

console.log(mystore.getState())

console.log(mystore.dispatch(buynewlatop()))
console.log(mystore.dispatch(buynewlatop()))
console.log(mystore.dispatch(buynewlatop()))
console.log(mystore.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
