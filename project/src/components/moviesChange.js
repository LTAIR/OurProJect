import React from 'react'
import {
    BrowserRouter  as Router,
    NavLink
} from 'react-router-dom'
export default class MovieChange extends React.Component{
    render(){
        return (
        <p>
        <NavLink to="/movie">正在热映</NavLink><NavLink to="/movie/f-hot">即将上映</NavLink>
        </p>
        )
    }
  
}