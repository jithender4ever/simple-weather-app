import React from "react";
import ReactDOM from "react-dom";

import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./components/App";
import apiReducer from "./reducers/apiReducer";

const rootReducer = combineReducers({
  api: apiReducer
});

// Creating store with middleware that handles async REST API calls
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
