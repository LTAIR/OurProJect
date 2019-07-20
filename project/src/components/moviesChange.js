import React from 'react'
import {
    BrowserRouter  as Router,
    NavLink
} from 'react-router-dom'
import axios from 'axios'
import '../assets/css/movie.css'
export default class MovieChange extends React.Component{
    render(){
        return (
        <div className={"allHeaders"}>
        <div className={"nav-headers"}>猫眼电影</div>
        <div className={"nav-mv"}>
        <button>定位</button><NavLink className="see"activeClassName="isSee" exact to="/movie">正在热映</NavLink>  <NavLink className="see"activeClassName="isSee" to="/movie/f-hot">即将上映</NavLink><button>搜索</button>
        </div>
        </div>
        )
    }
    // componentDidMount(){
    //     axios.get("../assets/json/data.json").then((data)=>{
    //         console.log(data)
    //     })
    // }
  
}