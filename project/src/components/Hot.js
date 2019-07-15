import React from 'react'
import MovieChange  from '../components/moviesChange'
import {connect} from  'react-redux'
import axios from 'axios'
class Tools{
    static change(str,newStr){
        return str.replace("w.h",newStr)
    }
}
class Hot extends React.Component{
    componentDidMount(){
        this.props.getHotMoveList();
        console.log(this.props.hotMovieList)
    }
    render(){
        return(
            <div>
             <MovieChange></MovieChange>
                {
                    this.props.hotMovieList.map((v,i)=>{
                        return(
                            <div key={v.id}>
                                <p>{v.nm}</p>
                                <img src={Tools.change(v.img,"170.230")}/>>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        hotMovieList:state.hotMovie.hotMovieList
    }
}
function mapDispatchToProps(dispatch){
    return  {
        getHotMoveList(){
            axios.get("/maoyan/ajax/mostExpected?ci=1&limit=10&offset=0&token=").then(({data})=>{
                const hotMovieList=data.coming;
                dispatch({
                    type:"CHANGE_HOTMOVIELIST",
                    payload:{
                        hotMovie:{
                            hotMovieList

                        }
                    }
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hot);
// http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=0&token=