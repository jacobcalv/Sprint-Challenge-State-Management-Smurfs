import axios from 'axios'
export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS' 
export const POST_SMURF_ERROR= 'POST_SMURF_ERROR'


export function postRequest(){
    return dispatch => {
        dispatch({type: POST_SMURF_START})

        axios
            .post('/smurfs')
            .then(res => {
                dispatch({type: POST_SMURF_SUCCESS, payload: {
            
                }})
            })
    }
}