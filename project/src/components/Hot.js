import React from 'react'
import MovieChange from '../components/moviesChange'
import { connect } from 'react-redux'
import axios from 'axios'
import Movie from '../components/Movies'
import  '../assets/css/hot.css'
import { ADD_MOREHOTCOMINGLIST, CHANGE_COMINGMOVIELIST, CHANGE_HOTMOVIELIST, } from '../store/action/actionType/hot'
import hotMethods,{ getHotMovieLists, getComingLists} from '../store/action/actionCreator/hot'
class Tools {
    static change(str, newStr) {
        return str.replace("w.h", newStr)
    }
    static getDay(str){
        return str.slice(0,str.indexOf("日")+1);
    }
}
class Hot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    componentDidMount() {
        this.props.getHotMoveList();
        this.props.getComingList(this.state.num);
        console.log(this.props.hotMovieList)
    }
    render() {
        return (
            <div>
            <div>
                <MovieChange></MovieChange>
                <p className="nowWish">近期最受期待</p>
                <div className="wish" >
                {
                    this.props.hotMovieList.map((v, i) => {
                        return (
                            <div className="wishMovie" key={i} onClick={()=>this.props.history.push("/detailmovie/"+v.id)}>
                                <img src={Tools.change(v.img, "170.230")} />
                                <p>{v.nm}</p>
                                <p className={"wishTitle"}>{Tools.getDay(v.comingTitle)}</p>
                            </div>
                        )
                    })
                }
                <input type="button" value="点击加载" onClick={this.props.getHotMoveList.bind(this, this.props.offset + 10)} />
                </div>
                {
                    this.props.comingList.map((v, i) => {
                        return (
                            <Movie v={v} Tools={Tools} key={i}></Movie>
                        )
                    })
                }
                {
                    this.props.moreHotComingList.map((v, i) => {
                        return ( 
                            <Movie v={v} Tools={Tools} key={i}></Movie>
                            )
                    })
                }
                <input type="button" value={"点击"} onClick={() => { this.setState({ num: ++this.state.num }); console.log("xx", this.state.num); this.props.getComingList(this.state.num) }} />
                
            </div>
           
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        hotMovieList: state.hotMovie.hotMovieList,
        comingList: state.hotMovie.comingList,
        offset: state.hotMovie.offset,
        movieIds: state.hotMovie.movieIds,
        moreHotComingList: state.hotMovie.moreHotComingList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getHotMoveList(offset=0) {
            // hotMethods.getHotMoveList();
            axios.get("/maoyan/ajax/mostExpected?ci=1&limit=10&offset=" + offset + "&token=").then(({ data }) => {
                console.log(data.coming);
                dispatch(getHotMovieLists({ hotMovie: { hotMovieList:data.coming, offset:data.paging.offset } }))
            })
        },
        getComingList(num=1) {
            axios.get("/maoyan/ajax/comingList?ci=1&token=&limit=10").then(({ data }) => {
                dispatch(getComingLists({ hotMovie: {comingList:data.coming,movieIds:data.movieIds}
                }))
                this.getMoreHotComingList(data, num);
            })
        },
        getMoreHotComingList(dataUp, num) {
            var str = ""
            function getStr(a, b) {
                dataUp.movieIds.splice(a, b).map((v, i) => {
                    return str += v + "%2C"
                })
                str = str.slice(0, str.lastIndexOf("%2C"))
                return str
            }

            axios.get("/maoyan/ajax/moreComingList?ci=1&token=&limit=10&movieIds=" + getStr(10 * num, 10 + 10 * num)).then(({ data }) => {
                dispatch({
                    type: ADD_MOREHOTCOMINGLIST,
                    payload: {
                        moreHotComingList:data.coming
                    }
                })
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hot);
// http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=0&token=