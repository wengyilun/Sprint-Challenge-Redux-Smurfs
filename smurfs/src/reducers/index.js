import {
	ADDING_SMURF,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_FAILURE,
	FETCHING_SMURF,
	FETCH_SMURF_SUCCESS,
	FETCH_SMURF_FAILURE,
	UPDATING_SMURF,
	UPDATE_SMURF_SUCCESS,
	UPDATE_SMURF_FAILURE,
	DELETING_SMURF,
	DELETE_SMURF_SUCCESS,
	DELETE_SMURF_FAILURE
} from '../actions'

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case ADDING_SMURF:
			return {
				...state,
				addingSmurf: true
			}
	
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				smurfs:action.payload,
				addingSmurf: false
			}
	
	
		case ADD_SMURF_FAILURE:
			return {
				...state,
				addingSmurf: false,
			}
	
		case FETCHING_SMURF:
			return {
				...state,
				fetchingSmurfs: true
			}
	
		case FETCH_SMURF_SUCCESS:
			return {
				...state,
				smurfs:action.payload,
				fetchingSmurfs: false
			}
	
	
		case FETCH_SMURF_FAILURE:
			return {
				...state,
				fetchingSmurfs: false,
			}
		
		
		case UPDATING_SMURF:
			return {
				...state,
				updatingSmurf: true
			}
		
		case UPDATE_SMURF_SUCCESS:
			return {
				...state,
				updatingSmurf: false
			}
		
		
		case UPDATE_SMURF_FAILURE:
			return {
				...state,
				updatingSmurf: false,
			}
		
		
		case DELETING_SMURF:
			return {
				...state,
				deletingSmurf: true
			}
		
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				deletingSmurf: false
			}
		
		
		case DELETE_SMURF_FAILURE:
			return {
				...state,
				deletingSmurf: false,
			}
		default:
		return state
	}
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
