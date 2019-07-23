import React from 'react'
import axios from 'axios'
import {
	connect
} from 'react-redux'
import {
	NavLink
} from 'react-router-dom'
import '../css/Cinema.css'
class Cinema extends React.Component{
    render(){
        return (
            <div>
				<div className="cinema">
					<div className="cinema-top">影院</div>
					<div className="cinema-gray-bg">
						<div className="cinema-city-entry">
							<span>北京</span>
							<i></i>
						</div>
						<div className="cinema-search-entry">
							
							<span>搜影院</span>
							<br/>
						</div>
					</div>
				</div>
				<div>
					{
						this.props.cinema.map((v,i)=>{
							return (
								<NavLink to={"/show/"+v.id} style={{textDecorationLine:"none",color:"#000"}} key={v.id} className="cinema-item-b">
									<div style={{display:"flex",justifyContent: "spaceBetween",width:"95%"}}>
										<span style={{fontSize:"1rem",width:"70%",textAlign: "left"}}>{v.nm}</span>
										
										<span style={{color:"red",fload:"right",fontSize:"1.1rem"}}>{v.sellPrice}</span>
										<span style={{color:"red",fload:"right",fontSize:"0.83rem",marginTop:"0.2rem"}}>元起</span>
										
									</div>
									<div style={{display:"flex"}}>
										<p style={{width:"80%",fontSize:"0.83rem",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{v.addr}</p>
										<span style={{fontSize:"0.80rem",marginTop:"0.8rem",marginLeft:"0.3rem"}} >{v.distance}</span>
									</div>
									<div style={{display:"{v.nm!==null}?'none'"}}>
									
										
										<span style={{fontSize:"0.4rem",color:"#589daf",border:"1px solid #589daf"}}>{v.tag.hallType}</span>
										
										
										<i style={{marginLeft:"0.2rem",fontSize:"0.4rem",color:"#f90",border:"1px solid #f90"}}>{v.tag.vipTag}</i>
									</div>
									<div>
										{v.promotion.cardPromotionTag}
									</div>
									<hr/>
								</NavLink>
							)
						})
					}
				</div>
				
            </div>
        )
    }
	componentDidMount(){
		console.log(1111,this.props.cinema)
		this.props.getCinema()
	}
}
function mapStateToProps(state,props){
	
	return{
		cinema:state.cinema
	}
	
}
function mapDidpatchToProps(dispatch){
	return{
		getCinema(){
			axios.get("/maoyan/ajax/cinemaList?day=2019-07-15&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1563183731423&cityId=1")
			.then(({data})=>{
				console.log(data)
				dispatch({
					type:"GETCINEMA",
					payload:{
						cinemaList:data.cinemas
					}
				})
			})
			
			
		}
		
		
	}
	
}

export default connect(mapStateToProps,mapDidpatchToProps)(Cinema);





// http://m.maoyan.com/ajax/cinemaList?day=2019-07-16&offset=20**&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=false&reqId=1563261244528&cityId=1
// http://m.maoyan.com/ajax/cinemaList?day=2019-07-16&offset=40**&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=false&reqId=1563261249595&cityId=1