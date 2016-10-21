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



const App = combineReducers({
  visitors,
})

export default App
