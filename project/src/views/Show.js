import React from 'react'
import axios from 'axios'
import {
	withRouter
} from "react-router-dom"
import {
	connect
} from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class Tools{
	static change(str,newStr){
		return str.replace("w.h",newStr)
	}
}
class Show extends React.Component{
	constructor(props){
		super(props)
		
	}
    render(){
		
        return (
            <div>
				<div className="show-navbar">
					<i onClick={()=>this.props.history.push("/cinema")}>&lt;</i>
					<span>{this.props.cinemaData.nm}</span>
				</div>
				<div style={{display:"flex",marginTop:"0.5rem",marginBottom:"0.5rem"}}>
					<div className="show-cinema-wrap">
						<b>{this.props.cinemaData.nm}</b><br/>
						<span>{this.props.cinemaData.addr}</span>
					</div>
					<div>定位</div>
				</div>
				
				<div>
					<div className="show-cinema-nav">
						<div className="show-cinema-nav-play ">
							{
								this.props.movies.map(v=>{
									return(
										<div className="show-play-top " key={v.id}>
											<img src={Tools.change(v.img,"74.110")}/>
										</div>
									)
								})
								
							}
						</div>
					</div>
					<div className="show-cinema-nav-bottom">
						<div className="show-play-bottom">
							{
								this.props.movies.map(v=>{
									return(
										<div key={v.id}>
											<h3>{v.nm}</h3>
											<span></span>
										</div>
									)
								})
							}
							
						</div>
						
					</div>
				</div>
            </div>
        )
    }
	componentDidMount(){
		this.props.getShow(this.props)
		
	}
}
function mapStateToProps(state,props){
	
	return{
		cinemaData:state.show.cinemaData,
		dealList:state.show.dealList,
		showData:state.show.showData,
		movies:state.show.movies
	}
}
function mapDidpatchToProps(dispatch){
	return {
		getShow(props){
			axios.get("/maoyan/ajax/cinemaDetail?cinemaId="+props.match.params.id)
			.then(({data})=>{
				
				dispatch({
					type:"GETSHOW",
					payload:{
						cinemaData:data.cinemaData,
						dealList:data.dealList,
						showData:data.showData,
						movies:data.showData.movies
					}
					
				})
			})
			
			
		}
	}
}
export default connect(mapStateToProps,mapDidpatchToProps)(withRouter(Show));


// http://m.maoyan.com/ajax/cinemaDetail?cinemaId=107
// http://m.maoyan.com/ajax/cinemaDetail?cinemaId=25346