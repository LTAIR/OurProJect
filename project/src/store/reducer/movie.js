import movieInit from '../state/movie'
import {CHANGE_MOVIELIST} from '../action/actionType/movie'
export default function (state=movieInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===CHANGE_MOVIELIST){
        state=payload.movieList
    }
    return state
}