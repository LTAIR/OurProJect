import React from 'react'
class Coupon extends React.Component{
    render(){
        return(
            <div>
            <div className={"nav-head"}><span onClick={()=>{this.props.history.go(-1)}}>&lt;</span><span>我的优惠券</span></div>
                优惠卷页
            </div>
        )
    }
}
export default Coupon