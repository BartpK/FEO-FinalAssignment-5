import counterReducer from "./counter"
import isLoading from "./isLoading"
import songManager from "./songmanager"
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLoading: isLoading,
    songManager: songManager
})

export default allReducers;