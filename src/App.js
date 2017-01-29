import React, { Component } from 'react';
import './App.css';

import reduxApp from './redux/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
let store = createStore(reduxApp)

// import firebase from 'firebase';
// var config = {
//   apiKey: "AIzaSyAU7WwWDLCClqH7-XkttUUKg2jsHqOl4Y4",
//   authDomain: "simple-react-firebase-app.firebaseapp.com",
//   databaseURL: "https://simple-react-firebase-app.firebaseio.com",
//   storageBucket: "simple-react-firebase-app.appspot.com",
// };
// firebase.initializeApp(config);

import Navigation from './containers/Navigation';
// import Firebase from './containers/Firebase';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation/>
        </div>
      </Provider>
    );
  }
}

export default App;
