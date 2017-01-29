import { combineReducers } from 'redux'

import firebase from 'firebase';

function visitors(state = {}, action){
  switch (action.type) {
    case 'FETCH_VISITORS_SUCCESS':
      return action.visitors
    default:
      return state
  }
}

function view(state = "HOME", action){
  switch (action.type) {
    case 'SET_VIEW':
      return action.view
    default:
      return state
  }
}



const App = combineReducers({
  visitors,
  view
})

export default App
