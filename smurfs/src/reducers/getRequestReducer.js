import {
    GET_SMURF_START,
    GET_SMURF_SUCCESS,
    GET_SMURF_ERROR
} from '../actions/getRequest'


import {initialState} from './state'

export const getRequest = (state=initialState, action) => {
    switch(action.type) {
        case GET_SMURF_START:
            return {
                ...state, 
                loading: true
            };
        case GET_SMURF_SUCCESS: 
            return {
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
                loading: false
            };
        case GET_SMURF_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default getRequest