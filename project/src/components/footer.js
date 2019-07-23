import React from 'react';
import {NavLink} from 'react-router-dom'
import "../App.css"
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
          <NavLink to={"/movie"}>电影</NavLink>
          <NavLink to={"/cinema"}>影院</NavLink>
          <NavLink to={"/my"}>我的</NavLink>
          </div>
        )
    }
}
export default Footer;