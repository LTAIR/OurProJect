import React from 'react'
import '../assets/css/phLogin.css'
import Copy from '../components/copy'
import axios from 'axios'
class MtLogin extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <div >
                <div className={"login-main"}>
               <div className={"login-phone"}>
            <input type="text" ref={"phoneId"} placeholder="请输入手机号"/><input className={"code"} type="button" onClick={()=>this.getSend()} value="发送验证码"/>
               </div>
               <input  ref={"code"} type="text" placeholder="请输入短信验证码"/>
               <input className="phone-login-btn" type="button" value="登录" onClick={()=>this.login()}/>
               <Copy></Copy>
                </div>
                </div>
        )
    }
    getSend(){
        axios.get("/code/sendCode",{params:{phoneId:this.refs.phoneId.value}}).then(({data})=>{
            console.log(data);
        })
    }
    login(){
        axios.post("/code/login", {phoneId:this.refs.phoneId.value,//传递参数电话号为前台输入框中的电话
        code:this.refs.code.value//传递参数验证码为前台输入的验证码
    }).then(({data})=>{
        if(data.ok===1){//返回的数据属性ok为1
            localStorage.userName=data.phoneId;//把数据库中返回的电话存入localstorage中
            this.props.history.push("/my")
        }
        else{
            alert(data.msg);//弹出错误信息
        }
    })
    }
}
export default MtLogin;