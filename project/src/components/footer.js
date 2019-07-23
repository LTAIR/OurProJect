import React from 'react';
import {NavLink} from 'react-router-dom'
import "../App.css"
import router from '../router/index'
import '../assets/iconfont/iconfont.css'
class Footer extends React.Component{
    constructor(props) {
        super(props);
        console.log(router)
    }
    
   
    render(){
        return(
            <div className="footer">
          <NavLink className={"navFooter"} activeClassName={"footer-active"}  to={"/movie"}><span className={"iconfont icon-dianying"}></span>电影</NavLink>
          <NavLink className={"navFooter"} activeClassName={"footer-active"}  to={"/cinema"}><span className={"iconfont icon-huaban"}></span>影院</NavLink>
          <NavLink className={"navFooter"} activeClassName={"footer-active"}  to={"/my"}><span className={"iconfont icon-my"}></span>我的</NavLink>
         
          </div>
        )
    }
}
export default Footer;