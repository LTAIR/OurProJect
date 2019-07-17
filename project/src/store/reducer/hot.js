import hotMovieInit from '../state/hot'
export default function (state = hotMovieInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (type === "CHANGE_HOTMOVIELIST")
        state.hotMovieList = state.hotMovieList.concat(payload.hotMovie.hotMovieList)
    if (type === "CHANGE_COMINGMOVIELIST") {
        state.comingList = payload.hotMovie.comingList
        state.movieIds = payload.hotMovie.movieIds
    }
    if (type === "ADD_MOREHOTCOMINGLIST") {
        state.moreHotComingList = payload.moreHotComingList;
        state.page = payload.page
        console.log(state.moreHotComingList)
    }
    return state
}