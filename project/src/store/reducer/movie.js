import movieInit from '../state/movie'
import {CHANGE_MOVIELIST,ADD_MORECOMINGLIST} from '../action/actionType/movie'
export default function (state=movieInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===CHANGE_MOVIELIST){
        state.movieList=payload.movieList
        state.movieIds=payload.movieIds
       
    }
    if(type===ADD_MORECOMINGLIST){
        state.moreComingList=state.moreComingList.concat(payload.moreComingList);
<<<<<<< HEAD
        state.page=payload.page
        console.log(state.moreComingList)
=======
        // console.log(state.moreComingList)
>>>>>>> ca361480fd7c2ab0c358cdc4959ca2536f922020
    }
    return state
}