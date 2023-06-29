import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from "./reducers";
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';



const enhancer = process.env.NODE_ENV === "production"? compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
