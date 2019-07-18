import React from 'react'
import {
    BrowserRouter  as Router,
    NavLink
} from 'react-router-dom'
import '../assets/css/movie.css'
export default class MovieChange extends React.Component{
    render(){
        return (
        <div>
        <div className={"nav-headers"}>猫眼电影</div>
        <NavLink to="/movie">正在热映</NavLink> | <NavLink to="/movie/f-hot">即将上映</NavLink>
        </div>
        )
    }
  
}