import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux'
import { receiveVisitors } from '../redux/actions'

// subscribe to store's state
const mapStateToProps = (state) => {
  return {
    visitors: state.visitors
  }
}

// create handler than dispatches an action
const mapDispatchToProps = (dispatch) => {
  return {
    fetchVisitors: (products) => {
      dispatch(receiveVisitors(products))
    },
  }
}

import firebase from 'firebase';

class FetchComponent extends Component {
  componentDidMount(){
    var ref = firebase.database().ref('visitors');
    ref.once('value', (snap) => {
      this.props.fetchVisitors(snap.val())
    });
  }
  render(){
    return null
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchComponent)

export default Container
