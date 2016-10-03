import { FETCH_RESOURCES, FETCH_RESOURCE, FETCH_RESOURCE_TYPES } from '../actions/index'

const INITIAL_STATE = { all: [], resource: null};


export default function(state = INITIAL_STATE, action) {
	switch(action.type){
	case FETCH_RESOURCE:
		return { ...state, resource: action.data };
	case FETCH_RESOURCES:
		return { ...state, all: action.data };
	case FETCH_RESOURCE_TYPES:
		console.log(action.data);
		return { ...state, all: action.data };
	default:
		return state;
	}
}