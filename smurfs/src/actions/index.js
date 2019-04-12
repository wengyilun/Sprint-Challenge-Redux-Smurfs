
import API from '../utils/API'

export const ADDING_SMURF = 'ADDING_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const FETCHING_SMURF = 'FETCHING_SMURF'
export const FETCH_SMURF_SUCCESS= 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'

export const UPDATING_SMURF = 'UPDATING_SMURF'
export const UPDATE_SMURF_SUCCESS= 'UPDATE_SMURF_SUCCESS'
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE'

export const DELETING_SMURF = 'DELETING_SMURF'
export const DELETE_SMURF_SUCCESS= 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const addSmurf = (smurf)=> dispatch=>{
	dispatch({type:ADDING_SMURF})
	API().post('/smurfs', smurf)
		.then(res => {
			console.log('addSmurf', res)
			dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
		})
		.catch(error => {
			console.log('error', error)
			dispatch({type: ADD_SMURF_FAILURE})
		})
}

export const getSmurfs = ()=> dispatch =>{
	dispatch({type:FETCHING_SMURF})
	console.log('FETCHING_SMURF')
	API().get('/smurfs')
		.then(res => {
			console.log('getSmurfs', res.data)
			dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
		})
		.catch(error => {
			console.log('error', error)
			dispatch({type: FETCH_SMURF_FAILURE})
		})
}



export const updateSmurf = (smurf)=> dispatch=>{
	dispatch({type:UPDATING_SMURF})
	API().put(`/smurfs/${smurf.id}`)
	.then(res => {
		console.log('res', res)
		dispatch({type: UPDATE_SMURF_SUCCESS})
	})
	.catch(error => {
		console.log('error', error)
		dispatch({type: UPDATE_SMURF_FAILURE})
	})
}


export const deleteSmurf = (smurf)=> dispatch=>{
	dispatch({type:DELETING_SMURF})
	API().delete(`/smurfs/${smurf.id}`)
	.then(res => {
		console.log('res', res)
		dispatch({type: DELETE_SMURF_SUCCESS})
	})
	.catch(error => {
		console.log('error', error)
		dispatch({type: DELETE_SMURF_FAILURE})
	})
}




