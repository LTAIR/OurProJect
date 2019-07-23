import {CHANGE_HOTMOVIELIST,CHANGE_COMINGMOVIELIST,ADD_MOREHOTCOMINGLIST} from '../actionType/hot'
import axios from 'axios';
export  function getHotMovieLists(payload){
return {
    type:CHANGE_HOTMOVIELIST,
    payload
}
}
export  function getComingLists(payload){
    return {
        type:CHANGE_COMINGMOVIELIST,
        payload
}
}
export default {
    getHotMoveList(offset = 0) {
        return (dispatch)=>{
            axios.get("/maoyan/ajax/mostExpected?ci=1&limit=10&offset=" + offset + "&token=").then(({ data }) => {
                dispatch(getHotMovieLists({ hotMovie: { hotMovieList:data.coming, offset:data.paging.offset } }))
            })
        }
       
    },
    getComingList(num){
        return (dispatch)=>{
            axios.get("/maoyan/ajax/comingList?ci=1&token=&limit=10").then(({ data }) => {
                dispatch(getComingLists({ hotMovie: {comingList:data.coming,movieIds:data.movieIds}
                }))
                this.getMoreHotComingList(data, num);
            })
        }
    }
}