import { connect } from 'react-redux'
import {  } from '../redux/actions'
import Page from '../components/Page'

const mapStateToProps = (state) => {
  return {
    visitors: state.visitors
  }
}

// create handler than dispatches an action
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default Container
