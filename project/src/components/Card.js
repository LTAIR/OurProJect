import React from 'react'
class Card extends React.Component{
    render(){
        return(
            <div>
             <div className={"nav-head"}><span onClick={()=>{this.props.history.go(-1)}}>&lt;</span><span>我的折扣卡</span></div>
                折扣卡
            </div>
        )
    }
}
export default Card