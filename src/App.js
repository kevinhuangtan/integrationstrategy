import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import reduxApp from './redux/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
let store = createStore(reduxApp)

import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAU7WwWDLCClqH7-XkttUUKg2jsHqOl4Y4",
  authDomain: "simple-react-firebase-app.firebaseapp.com",
  databaseURL: "https://simple-react-firebase-app.firebaseio.com",
  storageBucket: "simple-react-firebase-app.appspot.com",
};
firebase.initializeApp(config);

import Page from './containers/Page';
import Firebase from './containers/Firebase';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Firebase/>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Page/>
        </div>
      </Provider>
    );
  }
}

export default App;
