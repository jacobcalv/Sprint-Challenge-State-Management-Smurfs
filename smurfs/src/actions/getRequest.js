import axios from 'axios'
export const GET_SMURF_START = 'GET_SMURF_START'
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS' 
export const GET_SMURF_ERROR= 'GET_SMURF_ERROR'


export function getRequest(){
    return dispatch =>{
        dispatch({type: GET_SMURF_START });

        axios
            .get('/smurfs')
            .then(res => {
                dispatch({type: GET_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({type: GET_SMURF_ERROR, payload: err})
            });
    };
}