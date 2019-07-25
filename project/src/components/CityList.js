import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import '../assets/css/city.css'
class CityList extends React.Component {
    componentWillMount() {
        this.props.getCity()
    }
    render() {
        return (
            <div style={{ paddingTop: "20px" }}>
                {
                    this.props.city.map((v, i) => {
                        return (<div className={"city"} key={i}  >
                            <p className={"cityTop"}>{v.title}</p>
                            {v.lists.map((v, i) => {
                                return (
                                    <div className={"cityC"} key={i} onClick={() => this.props.history.push("/movie", v)} >
                                        {v}
                                    </div>
                                )
                            })}
                        </div>)
                    }
                    )
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        city: state.cityList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCity() {
            axios.get("./json/data.json").then(({ data }) => {
                console.log(data, 111)
                dispatch({
                    type: "GET_CITY_LIST",
                    payload: {
                        cityList: data
                    }
                })
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
