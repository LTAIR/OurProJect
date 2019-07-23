import myOrderInit from '../state/myOrder'
export default function (state=myOrderInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type==="GET_ORDER"){
        state=payload.orderList
    }
    return state
}