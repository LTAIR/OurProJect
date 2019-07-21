import movie from './movie'
import cinema from './cinema'
import show from './show'
import hotMovie from './hot'
import cityList from './cityList'
import myOrder from './myOrder'
import coupon from './coupon'
import {combineReducers} from 'redux'
export default combineReducers({movie,cinema,show,hotMovie,cityList,myOrder,coupon});
