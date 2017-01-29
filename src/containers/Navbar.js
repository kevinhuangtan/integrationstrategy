import { connect } from 'react-redux'
import { setView } from '../redux/actions'
import Navbar from '../components/Navbar'

const mapStateToProps = (state) => {
  return {
    activeView: state.view

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setView: (view) => {
      return(dispatch(setView(view)))
    }
  }
}


const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default Container
