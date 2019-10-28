import {
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_ERROR
} from '../actions/postRequest';

const initialState = {
    smurfs: null,
    error: null,
    loading: false
}

export const postRequest = (state=initialState, action) => {
    switch(action.type) {
        case POST_SMURF_START:
            return {
                ...state, 
                loading: true
            };
        case POST_SMURF_SUCCESS: 
            return {
                ...state,
                smurfs: action.payload,
                loading: false
            };
        case POST_SMURF_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default postRequest