import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import '../assets/css/coupon.css'
class Coupon extends React.Component {
    componentDidMount() {
        this.props.getCoupon();
    }
    render() {
        return (
            <div>
                <div className={"nav-head"}><span onClick={() => { this.props.history.go(-1) }}>&lt;</span><span>我的优惠券</span></div>
                优惠卷页
                {
                    this.props.coupon.map((v, i) => {
                        return (
                            <div key={v.code} className="couponAll">
                                <div className="couponLeft"style={{backgroundColor:v.leftDate?"#ff9d00":"gray"}}>
                                <p><span  className={"num"}>{v.value}</span>元</p><hr/><p>代金券</p>
                                </div>
                                <div  className={v.leftDate?"couponRight":"couponRighto"}>
                                <p className={"title"}>{v.title}</p>
                                     <p className={"limitDesc"}>{v.limitDesc}</p>
                                     <hr/>
                                     <p  className={"rangeTime"}>{v.rangeTime}</p>
                                     {v.leftDate?<p className="leftDate">{v.leftDate}</p>:""}
                                     </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        coupon: state.coupon
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCoupon() {
            axios.get("./json/compon.json").then(({ data }) => {
                console.log(data.couponlist)
                const coupon = data.couponlist;
                dispatch({
                    type: "GET_CONPON",
                    payload: {
                        coupon
                    }
                })
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Coupon)