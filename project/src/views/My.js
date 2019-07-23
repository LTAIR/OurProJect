import React from 'react'
import '../assets/css/my.css'
import imga from '../assets/img/4fcec0724e23f.jpg'
import {NavLink} from 'react-router-dom'
class My extends React.Component{
    
    render(){
        return (
            <div>
               <div className={"myTop"}>我的</div> 
              
                <div className={"myPhoto"}>
                    <img  src={imga} alt=""/>
                </div>
                <div className={"container"}>
                <div>
                    <p className={"order"}>我的订单</p>
                    <div className={"myOn"}>
                        <NavLink style={{color:"#000",textDecoration:"none"}} to={"/order"}>电影</NavLink> | <NavLink style={{color:"#000",textDecoration:"none"}} to={"/shop"}>商城</NavLink>
                    </div>
                </div>
                <div className={"change"}>
                    <p><NavLink style={{color:"#000",textDecoration:"none"}} to={"/live"}>在线观影</NavLink></p>
                    <p><NavLink style={{color:"#000",textDecoration:"none"}} to={"/coupon"}>优惠券</NavLink></p>
                    <p><NavLink style={{color:"#000",textDecoration:"none"}} to={"/card"}>折扣卡</NavLink></p>
                </div>
                </div>
>>>>>>> eb176b4e527f560937736702d77258c674bfb0e0
            </div>
        )
    }


}
   

export default My;