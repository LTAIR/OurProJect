import cityList from '../state/city.js'

export default function city(state=cityList,{type,payload}){
	state=JSON.parse(JSON.stringify(state))
	if(type==="GETCITY"){
		state.brand=payload.brand;
		state.district=payload.district.subItems;
		state.hallType=payload.hallType;
		state.service=payload.service;
		state.subway=payload.subway;
		state.timeRanges=payload.timeRanges;	
	}
	
	return state
}

