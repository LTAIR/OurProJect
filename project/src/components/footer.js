import React from 'react';
import {NavLink} from 'react-router-dom'
import "../App.css"
import router from '../router/index'
class Footer extends React.Component{
    constructor(props) {
        super(props);
        console.log(router)
    }
    
   
    render(){
        return(
            <div className="footer">
          <NavLink style={{color:"#000"}} activeStyle={{color:"red"}} to={"/movie"}>电影</NavLink>
          <NavLink style={{color:"#000"}} activeStyle={{color:"red"}}  to={"/cinema"}>影院</NavLink>
          <NavLink style={{color:"#000"}} activeStyle={{color:"red"}} to={"/my"}>我的</NavLink>
         
          </div>
        )
    }
}
export default Footer;