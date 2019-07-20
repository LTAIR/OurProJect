import React from 'react'
import '../assets/css/my.css'
import imga from '../assets/img/4fcec0724e23f.jpg'
class My extends React.Component{
    constructor(props) {
        super(props);
        // console.log(localStorage.userName)
        // let imgFt=JSON.parse(localStorage.img)
        // console.log(imgFt[localStorage.userName]);
    }
    
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
                        <div>电影</div><div>商城</div>
                    </div>
                </div>
                <div className={"change"}>
                    <p>在线观影</p>
                    <p>优惠券</p>
                    <p>折扣卡</p>
                </div>
                </div>
            </div>
        )
    }
}
export default My;