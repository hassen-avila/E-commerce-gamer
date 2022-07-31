import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {configureStore as createStore} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import mainReducer from './redux/reducers/mainReducer';


const reduxStore=createStore({reducer:mainReducer});

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


