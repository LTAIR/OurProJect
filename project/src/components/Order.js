import React from 'react'
import axios from 'axios'
import '../assets/css/order.css'
import {connect} from 'react-redux';
class Tools {
    static change(str, newStr) {
        return str.replace("w.h", newStr)
    }
    static double(n) {
        return n.toFixed(1)
    }
}
class Order extends React.Component{
    componentDidMount(){
        this.props.getOrder();
    }
    render(){
        return(
            <div>
               <div className={"nav-head"}><span onClick={()=>{this.props.history.push("/my")}}>&lt;</span><span>我的电影订单</span></div>
                   {this.props.orderList.map((v,i)=>{
                       return (
                        <div key={i}>
                                <p className="myOrderTop">{v.cinema.name}</p>
                                <div className="myOrderMain">
                                    <img src={Tools.change(v.movie.img,"114.160")}/>
                                    <div className="orderMovieMain">
                                       <p>{v.movie.name} {v.seats.count}张</p> 
                                       <span>{v.show.showTime}</span>
                                       <span>{v.seats.hallName} {v.seats.list.map((v,i)=>{
                                           return (
                                               <span key={i}>
                                                 {v.rowId}排{v.columnId}座
                                               </span>
                                           )
                                       })}  </span>
                                    </div>
                                </div>
                                <div className="myOrderUnd"><span>总价：{v.order.sellMoney}</span><span>{v.otherStatus}</span></div>
                            </div>
                       )
                    })}
                
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state.myOrder)
    return {
        orderList:state.myOrder
    }
}
function mapDispatchToProps(dispatch){
    return {
        getOrder(){
            axios.get("./json/order.json").then(({data})=>{
                const orderList=data.orderlist;
                dispatch({
                    type:"GET_ORDER",
                    payload:{
                        orderList
                    }
                })
            })
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Order);