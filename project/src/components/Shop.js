import React from 'react'
class Order extends React.Component{
    render(){
        return(
            <div>
               <div className={"nav-head"}><span onClick={()=>{this.props.history.push("/my")}}>&lt;</span><span>我的周边商品</span></div>
                <div>最近没有新订单</div>
            </div>
        )
    }
}
export default Order;