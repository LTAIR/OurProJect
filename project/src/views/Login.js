import React from 'react'
import '../assets/css/login.css'
import {NavLink} from 'react-router-dom'
class Login extends React.Component{
    render(){
        return (
            <div>
                <div className={"nav-head"}><span onClick={()=>{this.props.history.push("/movie")}}>&lt;</span><span>猫眼电影</span></div>
                <div className="Top">
                <NavLink to={"/login/"} exact  className={"loginTop"} activeClassName={"isLoginTop"}>美团账号登录</NavLink><NavLink activeClassName={"isLoginTop"} className={"loginTop"} to={"/login/phLogin"}>手机验证登录</NavLink>
                </div>
            </div>
        )
    }
}
export default Login;