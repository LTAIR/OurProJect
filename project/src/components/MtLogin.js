import React from 'react'
import '../assets/css/mtlogin.css'
import Copy from '../components/copy'
class MtLogin extends React.Component {
    render() {
        return (
                <div>
                <div className="form">
                <input type="text" ref={"userName"} placeholder="帐户名/手机号/Email"/>
                <input type="text" ref={"password"} placeholder="请输入您的密码"/>
                </div>
                <input type="button" className={"loginbtn"} onClick={()=>this.isLogin()} value="登录"/>
                <Copy></Copy>
                </div>
        )
    }
    isLogin(){
        if(localStorage.userNameList.includes(this.refs.userName.value)&&this.refs.password.value==="123456")
       {localStorage.userName=this.refs.userName.value;
       this.props.history.push("/my")}
       else{
           alert("请输入正确的用户名和密码");
       }
    }
}
export default MtLogin;