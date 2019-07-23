import React from 'react'
import axios from 'axios'
import {
	NavLink
} from 'react-router-dom'
import '../assets/css/movieAbout.css'
class Tools {
    static change(str, newStr) {
        return str.replace("w.h", newStr)
    }
    static double(n) {
        return n.toFixed(1)
    }
}
class MovieAbout extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            v: {},
            img: "",
			cinemaList: []
        }
    }
    render() {
        const movieAbout=this.state;
		console.log(121,this.state.cinemaList);
        return (
            <div>
                <div className={"nav-header"}><span onClick={()=>this.props.history.go(-1)}>&lt;</span><span>{movieAbout.v.nm}</span></div>
                <div className={"nav-detail"} onClick={()=>this.props.history.push("/HuoQu/"+movieAbout.v.id)}>
                <img src={Tools.change(movieAbout.img, "148.208")} />
                <div className={"nav-detail-center"}>
                <p>{movieAbout.v.nm}</p>
                <p>{movieAbout.v.enm}</p>
                <p>{movieAbout.v.sc} {movieAbout.v.snum}人看过</p>
                <p>{movieAbout.v.cat}</p>
                <p>{movieAbout.v.src}/{movieAbout.v.dur}分钟</p>
                <p>{movieAbout.v.pubDesc}</p>
                </div>
                <a href="#">&gt;</a>
                </div>
				<
				div style = {
					{
						boxSizing: "border-box",
						borderTop:"1px solid #d8d8d8"
					}
				} > {
					this.state.cinemaList.map((v, i) => {
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
							hr style={{color:"#d8d8d8"}}/ >
							<
							/NavLink>
						)
					})
				} <
				/div>
				
            </div>
        )
    }
    componentWillMount() {
        axios.get("/maoyan/ajax/detailmovie?movieId="+this.props.match.params.id).then(({ data }) => {
            console.log(data,996);
            // console.log(data.detailMovie.img)
            this.setState({
                v: data.detailMovie,
                img: data.detailMovie.img
            })
        })
    }
	componentDidMount(){
		this.getCinema(
			"/maoyan/ajax/cinemaList?day=2019-07-15&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1563183731423&cityId=1"
		)
	}
	getCinema(url) {
		axios.get(url)
			.then(({
				data
			}) => {
				console.log(data)
				this.setState({
					cinemaList: data.cinemas
				})
	
			})
	}
}
export default MovieAbout;