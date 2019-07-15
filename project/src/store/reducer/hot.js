import hotMovieInit from '../state/hot'
export default function (state=hotMovieInit,{type,payload}){
        state=JSON.parse(JSON.stringify(state))
        if(type==="CHANGE_HOTMOVIELIST"){
            state.hotMovieList=payload.hotMovie.hotMovieList
            console.log(state.hotMovie)
        }
        return state
}