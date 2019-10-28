import {combineReducers} from 'redux'

import {getRequest as get} from './getRequestReducer'
import {postRequest as post} from './postRequestReducer'

export default combineReducers({
    get, post
})





