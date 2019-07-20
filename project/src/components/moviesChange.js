import React from 'react'
import {
    BrowserRouter  as Router,
    NavLink,
    Route,
    withRouter
    
} from 'react-router-dom'
import axios from 'axios'
import '../assets/css/movie.css'
import { connect } from 'react-redux';
import CityList from './CityList'
 class MovieChange extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            cities:[]
        }
    }
    render(){
        return (
        <div className={"allHeaders"}>
        <div className={"nav-headers"}>猫眼电影</div>
        <div className={"nav-mv"}>
        <NavLink  className="see" onClick={()=>{this.getCity()}} to={"/city-list"} >北京</NavLink><NavLink className="see"activeClassName="isSee" exact to={"/movie"}>正在热映</NavLink>  <NavLink className="see"activeClassName="isSee" to={"/movie/f-hot"}>即将上映</NavLink><button>搜索</button>
        </div>
        </div>
        )
    }
    getCity(){
        axios.get("/code/assets/json/data.json").then(({data})=>{
            console.log(data)
       this.setState={
           cities:data
       }
    })
    }
}

export default  withRouter(MovieChange)