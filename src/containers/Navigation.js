import { connect } from 'react-redux'
import {  } from '../redux/actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default Container
