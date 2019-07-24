import React from 'react'
import {
    BrowserRouter  as Router,
    NavLink,
    Route,
    withRouter
    
} from 'react-router-dom'
import axios from 'axios'
import '../assets/css/movie.css'
import '../assets/iconfont/iconfont.css'
import { connect } from 'react-redux';
import CityList from './CityList'
 class MovieChange extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            cities:[],
            ct:"北京"
        }
        // console.log(this.props.location.state);
        
    }
    componentDidMount(){
        this.setState({
            ct:this.props.location.state || "北京"
        })
    }
    render(){
        return (
        <div className={"allHeaders"}>
        <div className={"nav-headers"}>猫眼电影</div>
        <div className={"nav-mv"}>
        <NavLink  className="see" onClick={()=>{this.getCity()}}  to={"/city-list"} >{this.state.ct}</NavLink><NavLink className="see"activeClassName="isSee" exact to={"/movie"}>正在热映</NavLink>  <NavLink className="see"activeClassName="isSee" to={"/movie/f-hot"}>即将上映</NavLink><span style={{color:"red"}} className={"iconfont icon-xingtaiduICON_sousuo---copy"} onClick={()=>this.props.history.push("/search")}></span>
        </div>
        </div>
        )
    }
    getCity(){
        axios.get("./json/data.json").then(({data})=>{
            console.log(data,111111)
       this.setState={
           cities:data
       }
    })
    }
}

export default  withRouter(MovieChange)