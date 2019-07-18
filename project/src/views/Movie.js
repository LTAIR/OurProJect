import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import "../assets/css/movie.css"
import MovieChange from '../components/moviesChange'
import { CHANGE_MOVIELIST, ADD_MORECOMINGLIST } from '../store/action/actionType/movie'
import Footer from '../components/footer'
import Movie from '../components/Movies'
import Lazy from '../components/lazy'
class Tools {
    static change(str, newStr) {
        return str.replace("w.h", newStr)
    }
    static double(n) {
        return n.toFixed(1)
    }
}
class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }
    componentDidMount() {
        this.props.getMovieList(this.state.num);
    }
    render() {
        return (
            
            <div>
             <MovieChange></MovieChange>
                <div key={"0"}>
                    <hr />
                    {this.props.movieList.map((v, i) => {
                        return (
                            <Movie v={v} Tools={Tools} key={i}></Movie>
                        )
                    })}
                    {
                        this.props.moreComingList.map((v, i) => {
                            return (
                                <Movie v={v} Tools={Tools} key={i}></Movie>
                            )
                        })
                    }
                    <input type="button" value={"点击"} onClick={() => { this.setState({ num: ++this.state.num }); console.log(this.state.num); this.props.getMovieList(this.state.num) }} />
                </div>
                {/* <Footer></Footer> */}
            </div>
        )
    }
}
function mapStateToProps(state, props) {
    return {
        movieList: state.movie.movieList,
        movieIds: state.movieIds,
        moreComingList: state.movie.moreComingList
    }
}
function mapDispatchToProps(dispatch, action) {
    return {
        getMovieList(num) {
            axios.get("/maoyan/ajax/movieOnInfoList?token=&movieIds=").then(({ data }) => {
                console.log(data.movieList);
                const movieList = data.movieList;
                const movieIds = data.movieIds;
                dispatch({
                    type: CHANGE_MOVIELIST,
                    payload: {
                        movieList,
                        movieIds,
                    }
                })
                // this.getMoreList(data,num);
                document.addEventListener('scroll',()=> {
                    console.log(num+1)
                    console.log((window.scrollY/500))
                    if((document.scrollingElement.scrollTop-document.body.cilentHeight)<10){
                        console.log(window.scrollY)
                        this.getMoreList(data,num);
                        console.log(num,"当前num")
                        num++;
                        // if(window.scrollY===1200+num*500)
                        //         num++;
                    }
                 })
                //  this.getMoreList(data, num);
            })
        },
        getMoreList(dataAll, num) {
            var str = ""
            function getStr(a, b) {
                dataAll.movieIds.splice(a, b).map((v, i) => {
                    return str += v + "%2C"
                })
                str = str.slice(0, str.lastIndexOf("%2C"))
                return str
            }

            axios.get("/maoyan/ajax/moreComingList?token=&movieIds=" + getStr(12 + 10 * num, 22 + 10 * num)).then(({ data }) => {
                const moreComingList = data.coming;
                str = str.split("%2C")
                dispatch({
                    type: ADD_MORECOMINGLIST,
                    payload: {
                        moreComingList,
                    }
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);