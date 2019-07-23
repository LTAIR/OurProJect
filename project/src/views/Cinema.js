import React from 'react'
import axios from 'axios'
import {
	connect
} from 'react-redux'
import {
	NavLink
} from 'react-router-dom'
import '../css/Cinema.css'
class Cinema extends React.Component {
	constructor() {
		super()
		this.state = {
			subItems: [],
			bigId: null,
			smallId: 673,
			isShow: false
		}

	}
	render() {
		return ( <div>
			<div className = "cinema" >
			<div className = "cinema-top" > 影院 < /div> 
			<div className = "cinema-gray-bg" >
			<div className = "cinema-city-entry" >
			<span onClick={()=>{this.props.history.push("/city-list")}}> 北京 < /span> 
			<i > < /i> <
			/div> <div className = "cinema-search-entry" >

			<span > 搜影院 < /span> <br / >
			</div> <
			/div> <
			div className = "cinema-nav-wrap-top" >
			<
			div className = "cinema-nav-wrap" >
			<
			div height={'620px'} onClick = {
				this.getCity.bind(this) 
			} > 全部 <
			/div> | <
			div > 品牌 < /div> | <
			div > 特色 < /div>

			<
			/div> <
			div style = {
				{
					display: this.state.isShow ? "block" : "none",
					height: "19rem",
					overflow: "scroll",
					index: "10"
				}
			} >
			<
			div style = {
				{
					display: "flex",
					height: "40%",
					flexDirection: "column"
				}
			} >
			<
			div style = {
				{
					display: "flex",
					justifyContent: "space-around"
				}
			} >
			<
			div > 商区 < /div> <
			div > 地铁站 < /div> <
			/div> <
			div >
			<
			div style = {
				{
					display: "flex",
					width: "100%",
					justifyContent: "spance-around"
				}
			} >
			<
			div style = {
				{
					float: "left",
					width: "30%",
					background: "#fff",
					textAlign: "left",
					padding: "1rem"
				}
			} > {
				this.props.district.map(v => {
					return ( <
						div key = {
							v.id
						}
						style = {
							{
								display: "flex",
								overflow: "hidden",
								whiteSpace: "nowrap",
								textOverflow: "ellipsis"
							}
						} >
						<
						div

						style = {
							{
								lineHeight: "2rem"
							}
						}
						onClick = {
							this.getSubItems.bind(this, v.id)
						} >
						{
							v.name
						} < /div><span>({v.count})</span >
						<
						/div>
					)
				})
			} <
			/div> <
			div style = {
				{
					background: "#e7e7e7",
					width: "65%",
					marginRight: "3%",
					overflow: "auto"
				}
			} > {
				this.state.subItems.map(v => {
					return ( <
						div key = {
							v.id
						}
						onClick = {
							()=>{this.getSubItemsUrl(v.id);console.log( v.id)}
						}
						style = {
							{
								display: "flex",
								justifyContent: "space-between",
								width: "88%",
								lineHeight: "0.4rem"
							}
						} >
						<
						p style = {
							{
								textAlign: "left",
								paddingLeft: "1rem"
							}
						} > {
							v.name
						} <
						/p> <
						p style = {
							{
								float: "fight",
								textAlign: "right"
							}
						} > {
							v.count
						} < /p >

						<
						/div>
					)
				})
			} <
			/div> <
			/div> <
			/div> <
			/div> <
			/div> <
			/div> <
			/div>



			<
			div style = {
				{
					boxSizing: "border-box"
				}
			} > {
				this.props.cinema.map((v, i) => {
					return ( <
						NavLink to = {
							"/show/" + v.id
						}
						style = {
							{
								textDecorationLine: "none",
								color: "#000"
							}
						}
						key = {
							v.id
						}
						className = "cinema-item-b" >
						<
						div style = {
							{
								display: "flex",
								justifyContent: "spaceBetween",
								width: "95%",
								paddingLeft: "1rem"
							}
						} >
						<
						span style = {
							{
								fontSize: "1rem",
								width: "70%",
								textAlign: "left"
							}
						} > {
							v.nm
						} < /span>

						<
						span style = {
							{
								color: "red",
								fload: "right",
								fontSize: "1.1rem"
							}
						} > {
							v.sellPrice
						} < /span> <
						span style = {
							{
								color: "red",
								fload: "right",
								fontSize: "0.83rem",
								marginTop: "0.2rem"
							}
						} > 元起 < /span>

						<
						/div> <
						div style = {
							{
								display: "flex"
							}
						} >
						<
						p style = {
							{
								width: "80%",
								fontSize: "0.83rem",
								overflow: "hidden",
								whiteSpace: "nowrap",
								textOverflow: "ellipsis",
								textAlign: "left",
								paddingLeft: "1rem",
								margin:0
							}
						} > {
							v.addr
						} < /p> <
						span style = {
							{
								fontSize: "0.80rem",
								marginTop: "0.8rem",
								marginLeft: "0.3rem"
							}
						} > {
							v.distance
						} < /span> <
						/div> <
						div style = {
							{
								display: "{v.nm!==null}?'none'"
							}
						} >


						<
						span style = {
							{
								marginLeft: "1rem",
								fontSize: "0.4rem",
								float: "left",
								color: "#589daf",
								border: "1px solid #589daf"
							}
						} > {
							v.tag.hallType
						} < /span>


						<
						i style = {
							{
								marginLeft: "0.2rem",
								float: "left",
								fontSize: "0.4rem",
								color: "#f90",
								border: "1px solid #f90"
							}
						} > {
							v.tag.vipTag
						} < /i> <
						br / >
						<
						/div> <
						div style = {
							{
								float: "left",
								marginLeft: "1rem"
							}
						} > {
							v.promotion.cardPromotionTag
						} <
						/div> <
						hr / >
						<
						/NavLink>
					)
				})
			} <
			/div>

			<
			/div>
		)
	}
	getCity() {

		this.setState({
			isShow: !this.state.isShow
		})
	}
	getSubItems(bigId, e) {
		this.setState({
			bigId,
			subItems: this.props.district.find(v => v.name === e.target.innerText).subItems
		})


	}
	getSubItemsUrl(smallId) {
		console.log(smallId)
		this.setState({
			smallId,
			isShow: !this.state.isShow
		})
		console.log(111, this.state.smallId, this.state.bigId)
		this.adv(smallId)

	}
	adv(smallId){
		console.log(this.state.bigId,smallId,1111)
		console.log("/maoyan/ajax/cinemaList?day=2019-07-22&offset=0&limit=20&districtId=" +this.state.bigId +
			"&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=" +smallId +
			"&stationId=-1&item=&updateShowDay=false&reqId="+Date.now()+"&cityId=10")
		this.props.getCinema("/maoyan/ajax/cinemaList?day=2019-07-22&offset=0&limit=20&districtId=" +this.state.bigId +
			"&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=" +smallId +
			"&stationId=-1&item=&updateShowDay=false&reqId="+Date.now()+"&cityId=10")
	}
	componentDidMount() {
		this.props.getCinema(
			"/maoyan/ajax/cinemaList?day=2019-07-15&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1563183731423&cityId=1"
		)
		this.props.getCity()

	}
}

function mapStateToProps(state, props) {
	console.log(state)
	return {
		cinema: state.cinema,
		city: state.city,
		brand: state.city.brand,
		district: state.city.district,
		hallType: state.city.hallType,
		service: state.city.service,
		subway: state.city.subway,
		timeRanges: state.city.timeRanges
	}

}

function mapDidpatchToProps(dispatch) {

	return {
		getCinema(url) {
			axios.get(url)
				.then(({
					data
				}) => {
					console.log(data)
					dispatch({
						type: "GETCINEMA",
						payload: {
							cinemaList: data.cinemas,

						}
					})
				})
		},
		getCity() {
			axios.get("/maoyan/ajax/filterCinemas?ci=10")
				.then(({
					data
				}) => {
					dispatch({
						type: "GETCITY",
						payload: {
							brand: data.brand,
							district: data.district,
							hallType: data.hallType,
							service: data.service,
							subway: data.subway,
							timeRanges: data.timeRanges
						}
					})
				})
		},



	}

}

export default connect(mapStateToProps, mapDidpatchToProps)(Cinema);


//districtId朝阳区id
//areaId:望京673
//updateShowDay:应该是搜索就是false
//reqId时间戳
//districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1563627626544&cityId=1
//districtId=14&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=673&stationId=-1&item=&updateShowDay=false&reqId=1563627669776&cityId=1
//day=2019-07-15&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1563183731423&cityId=1