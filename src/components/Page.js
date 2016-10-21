import React, { PropTypes, Component } from 'react';

import firebase from 'firebase';
import Styles from '../styles';
var MobileDetect = require('mobile-detect');
var mobile = new MobileDetect(window.navigator.userAgent).mobile();

export default class Bag extends Component {
  state = {
  }

  static propTypes = {
    visitors: PropTypes.array.isRequired,
  }

  componentDidMount(){
    var self = this;
    // retrieve user's bag from previous session
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      }
    });
  }
  render(){
    const { visitors } = this.props;

    return(
      <div>
        <h1>Page</h1>
        <div>
          {Object.keys(visitors).map((key, i)=>{
            return <p key={i}>{visitors[key].name}</p>
          })}
        </div>
      </div>

    )
  }
}
