import movieInit from '../state/movie'
export default function (state=movieInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type==="CHANGE_MOVIELIST"){
        state=payload.movieList
    }
    return state
}