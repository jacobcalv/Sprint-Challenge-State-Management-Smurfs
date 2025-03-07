import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import logger from 'redux-logger'
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import rootReducer from './reducers'



const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
