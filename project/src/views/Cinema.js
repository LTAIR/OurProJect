import React from 'react'
import axios from 'axios'
import '../css/Cinema.css'
class Cinema extends React.Component{
    render(){
        return (
            <div>
				<div className="cinema">影院</div>
				<div className="cinema-gray-bg">
					<div className="cinema-city-entry">
						<span>北京</span>
						<i></i>
					</div>
					<div classNmae="cinema-search-entry">
						
						<span>搜影院</span>
					</div>
				</div>
				
				
            </div>
        )
    }
	componentDidMount(){
		console.log(1111)
		axios.get("/maoyan/ajax/cinemaList?day=2019-07-15&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1563183731423&cityId=1")
		.then(({data})=>{
			console.log(data)
		})
	}
}
export default Cinema;