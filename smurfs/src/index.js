import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import logger from 'redux-logger'
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {getRequest, postRequest} from './reducers'

const rootReducer = combineReducers({
    getRequest, postRequest
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
