import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { createStore } from 'redux';
import allReducers from "./reducers"
import { Provider } from 'react-redux'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="mainnav">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Router>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
