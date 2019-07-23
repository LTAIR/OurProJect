import cityListInit from '../state/cityList'
export default function (state=cityListInit,{type,payload}){
        state=JSON.parse(JSON.stringify(state))
        if(type==="GET_CITY_LIST"){
            state=payload.cityList;
        }
        return state
}