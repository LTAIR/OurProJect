import  React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import MovieChange from '../components/moviesChange'
import {CHANGE_MOVIELIST,ADD_MORECOMINGLIST} from '../store/action/actionType/movie'
class Tools{
    static change(str,newStr){
        return str.replace("w.h",newStr)
    }
}
class Movies extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props)
       this.state={
           num:1
       }
    }
    componentDidMount(){
        this.props.getMovieList(this.state.num);
        // console.log(this.props.moreComingList)
    }
    
    render(){
        return(<div>
                    <MovieChange></MovieChange>
                    {this.props.movieList.map((v,i)=>{
                    return(
                        <div key={v.id}>
                            <p>{v.nm}</p>
                            <img src={Tools.change(v.img,"140.80")}/>
                           <div>
                            <span>观众评:{v.sc}</span>
                            <input type="button" value={v.globalReleased?"购票":"预售"} />
                            </div>
                        </div>
                    )
                })}
                <hr/>
                {
                    this.props.moreComingList.map((v,i)=>{
                       return(
                        <div key={i}>
                            <p>{v.nm}</p>
                            <img src={Tools.change(v.img,"140.80")}/>
                        </div>
                       ) 
                    })
                }
                <input type="button" value={"点击"} onClick={()=>{this.setState({num:++this.state.num});console.log(this.state.num);this.props.getMovieList(this.state.num)}}/> 
                </div>
        )
    }
}
function mapStateToProps(state,props){
    // console.log(state,111)
    return {
        movieList:state.movie.movieList,
        movieIds:state.movieIds,
        moreComingList:state.movie.moreComingList
    }
}
function mapDispatchToProps(dispatch,action){
    return {
        getMovieList(num){
            axios.get("/maoyan/ajax/movieOnInfoList?token=&movieIds=").then(({data})=>{
                // console.log(data);
                const movieList=data.movieList;
                const movieIds=data.movieIds;
                dispatch({
                    type:CHANGE_MOVIELIST,
                    payload:{
                        movieList,
                        movieIds,
                    }
                })
                this.getMoreList(data,num);
                
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
        //    console.log(moreComingList)
        //    console.log("aaa",num)
        //    console.log(dataAll.movieIds)
           str=str.split("%2C")
        //    console.log(str=str.split("%2C"))
        //    console.log(str[0])
        //    console.log(dataAll.movieIds.indexOf(str[0]))
           dispatch({
               type:ADD_MORECOMINGLIST,
               payload:{
                   moreComingList,
                   
               }
           })
          
        })
        
        
    }
}}
export default connect(mapStateToProps,mapDispatchToProps)(Movies);