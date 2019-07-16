import movie from './movie'
import hotMovie from './hot'
import { combineReducers } from 'redux'
export default combineReducers({ movie, hotMovie });