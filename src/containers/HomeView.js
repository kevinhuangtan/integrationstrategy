import { connect } from 'react-redux'
import { setView } from '../redux/actions'
import HomeView from '../components/HomeView'

const mapStateToProps = (state) => {
  return {
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
)(HomeView)

export default Container
