import React from 'react'
import {
	connect
} from "react-redux"
import axios from 'axios'
class City extends React.Component{
	constructor(){
		super()
		this.state={
			subItems:[],
			bigId:"",
			smallId:""
			
		}
	}
	
	render(){
		
		return (
			<div style={{display:"flex",height:"40%",flexDirection:"column"}}>
				<div style={{display:"flex",justifyContent:"space-around"}}>
					<div>商区</div>
					<div>地铁站</div>
				</div>
				<div style={{display:"flex",width:"100%",justifyContent:"spance-around"}}>
					<div style={{float:"left",width:"30%",background:"#fff",textAlign:"left",padding:"1rem"}}>
						{
							this.props.district.map(v=>{
								return (
									<div key={v.id} style={{display:"flex",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
										<div  
																	
										style={{lineHeight:"2rem"}}
										onClick={this.getSubItems.bind(this,v.id)}
										>{v.name}</div><span>({v.count})</span>
									</div>
								)
							})
						}
					</div>
					<div style={{background:"#e7e7e7",width:"65%",marginRight:"3%",overflow:"auto"}}>
						{
							this.state.subItems.map(v=>{
								return (
									<div key={v.id} onClick={this.getSubItemsUrl.bind(this,v.id)} style={{display:"flex",justifyContent: "space-between",width:"88%",lineHeight:"0.4rem"}}> 
										<p style={{textAlign:"left",paddingLeft:"1rem"}}>
											{v.name}
										</p>
										<p  style={{float:"fight",textAlign: "right"}}>{v.count}</p >

									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		
		)
	}
	getSubItems(bigId,e){
		this.setState({
			bigId,
			subItems:this.props.district.find(v=>v.name===e.target.innerText).subItems
		},function(){
			
		})
		
		
	}
	getSubItemsUrl(smallId,e){
		this.setState({
			smallId
			
		})
		
		
	}
	
	componentDidMount(){
		this.props.getCity()
		console.log(1232,this.state.district)
		this.props.cityid(this.state.bigId,this.state.smallId)
	}
	
	
}
function mapStateToProps({city}){
	
	
	return {
		brand:city.brand,
		district:city.district,
		hallType:city.hallType,
		service:city.service,
		subway:city.subway,
		timeRanges:city.timeRanges
	}
}
function mapDidpatchMount(dispatch){
	
	
	return {
		
		getCity(){
			axios.get("/maoyan/ajax/filterCinemas?ci=10")
			.then(({data})=>{
				console.log(999,data)
				dispatch({
					type:"GETCITY",
					payload:{
						brand:data.brand,
						district:data.district,
						hallType:data.hallType,
						service:data.service,
						subway:data.subway,
						timeRanges:data.timeRanges
					}
				})
			})
		},
	}
	
}



export default connect(mapStateToProps,mapDidpatchMount)(City)

//&districtId=***~14&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&***~areaId=673&stationId=-1&item=&updateShowDay***~=false&reqId=1563444831602&cityId=1
//&districtId=***~-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&***~areaId=-1&stationId=-1&item=&updateShowDay=***~true&reqId=1563444822571&cityId=1
// day=2019-07-18&offset=0&limit=20&
// districtId=14//朝阳区ID
// &lineId=-1
// &hallType=-1
// &brandId=-1
// &serviceId=-1
// &areaId=673
// &stationId=-1
// &item=&updateShowDay=false
// &reqId=1563453388574
// &cityId=1
// ###&areaId=673