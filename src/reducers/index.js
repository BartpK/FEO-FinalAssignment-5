import isLoading from "./isLoading"
import songManager from "./songManager"
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    isLoading: isLoading,
    songManager: songManager
})

export default allReducers;