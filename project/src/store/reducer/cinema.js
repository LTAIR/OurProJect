import cinemaList from '../state/cinema.js'

export default function(state=cinemaList,{type,payload}){
	state=JSON.parse(JSON.stringify(state))
	if(type==="GETCINEMA"){
		state=payload.cinemaList
		
	}
	
	return state
}


