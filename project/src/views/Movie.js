import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import "../assets/css/movie.css"
import MovieChange from '../components/moviesChange'
import { CHANGE_MOVIELIST, ADD_MORECOMINGLIST } from '../store/action/actionType/movie'
import Movie from '../components/Movies'
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
            num: 0,
        }
    }
    componentDidMount() {
        this.props.getMovieList(this.state.num);
    }
    render() {
        return (
            <div>
             <MovieChange></MovieChange>
                <div key={"0"} className={"tops"}>
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
                this.getMoreList(data,num);
<<<<<<< HEAD
                
                // console.log(data.movieIds.splice(11,21))
        })
    },
    getMoreList(dataAll,num){
        var str=""
        function getStr(a,b){
            dataAll.movieIds.splice(a,b).map((v,i)=>{
            return str+=v+"%2C"
        })
        str=str.slice(0,str.lastIndexOf("%2C"))
        return str
     }
    
        axios.get("/maoyan/ajax/moreComingList?token=&movieIds="+getStr(2+10*num,12+10*num)).then(({data})=>{
           const moreComingList=data.coming;
           console.log(moreComingList,1)
        //    console.log("aaa",num)
        //    console.log(dataAll.movieIds)
           str=str.split("%2C")
        //    console.log(str=str.split("%2C"))
        //    console.log(str[0])
        //    console.log(dataAll.movieIds.indexOf(str[0]))
           dispatch({
               type:'ADD_MORECOMINGLIST',
               payload:{
                   moreComingList,
                   
               }
           })
          
        })
        
        
=======
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
>>>>>>> ca361480fd7c2ab0c358cdc4959ca2536f922020
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);