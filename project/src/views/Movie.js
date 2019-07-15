import  React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import MovieChange from '../components/moviesChange'
import {CHANGE_MOVIELIST} from '../store/action/actionType/movie'
class Tools{
    static change(str,newStr){
        return str.replace("w.h",newStr)
    }
}
class Movies extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    componentDidMount(){
        this.props.getMovieList();
    }
    
    render(){
        return(<div>
                    <MovieChange></MovieChange>
                    {this.props.movieList.map((v,i)=>{
                    return(
                        <div key={i}>
                            <p>{v.nm}</p>
                            <img src={Tools.change(v.img,"140.80")}/>
                            <p>观众评:{v.sc}</p>
                        </div>
                    )
                })}
                </div>
        )
    }
}
function mapStateToProps(state,props){
    console.log(state,111)
    return {
        movieList:state.movieList,
    }
}
function mapDispatchToProps(dispatch,action){
    return {
        getMovieList(){
            axios.get("/maoyan/ajax/movieOnInfoList?token=").then(({data})=>{
                console.log(data);
                const movieList=data.movieList;
                dispatch({
                    type:CHANGE_MOVIELIST,
                    payload:{
                        movieList
                    }
                })
               
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movies);