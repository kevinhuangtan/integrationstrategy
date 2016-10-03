import { combineReducers } from 'redux';
import ResourceReducer from './reducer_resources';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  resources: ResourceReducer

});

export default rootReducer;
