import showList from '../state/show.js'
export default function(state=showList,{type,payload}){
	state=JSON.parse(JSON.stringify(state))
	if(type==="GETSHOW"){
		state.cinemaData=payload.cinemaData;
		state.dealList=payload.dealList;
		state.showData=payload.showData;
		state.movies=payload.movies
	}
	
	return state
}


