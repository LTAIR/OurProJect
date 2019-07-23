import couponInit from '../state/coupon'
export default function (state=couponInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type==="GET_CONPON"){
        state=payload.coupon
    }
    return state
}