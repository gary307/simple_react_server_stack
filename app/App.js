import React from "react";
import "./style.css";
import {
  HashHistory,
  BrowserHistory,
  BrowserRouter,
  Route
} from "react-router-dom";
import Routes from "./routes.js";
import Header from "./components/views/Header/Header.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./redux/rootReducer.js";
import todos from "./redux/reducers/todo.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Home from "./components/views/Home/home";

const initialState = {
  // todos: [{ id: 0, value: "a todo item" }]
};

let store = createStore(todos);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider
        store={createStore(
          rootReducers,
          initialState,
          composeWithDevTools(applyMiddleware(thunk))
        )}
      >
        <div className="app">
          <Header />
          <div className="wrapper">
            <Routes />
          </div>
        </div>
      </Provider>
    );
  }
}
