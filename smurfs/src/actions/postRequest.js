import axios from 'axios'
export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS' 
export const POST_SMURF_ERROR= 'POST_SMURF_ERROR'


export function postRequest(smurfData){
    return dispatch => {
        dispatch({type: POST_SMURF_START, payload: smurfData})

        axios
            .post('http://localhost:3333/smurfs', smurfData)
            .then(res => {
                dispatch({type: POST_SMURF_SUCCESS, payload: res})
            })
            .catch(error => {
                dispatch({type: POST_SMURF_ERROR, payload: error })
            })
    }
}