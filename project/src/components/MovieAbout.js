import React from 'react'
import axios from 'axios'
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
            img: ""
        }
    }
    render() {
        const movieAbout=this.state;
        return (
            <div>
                <div className={"nav-header"}><span onClick={()=>this.props.history.go(-1)}>&lt;</span><span>{movieAbout.v.nm}</span></div>
                <div className={"nav-detail"}>
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
            </div>
        )
    }
    componentWillMount() {
        axios.get("/maoyan/ajax/detailmovie?movieId="+this.props.match.params.id).then(({ data }) => {
            console.log(data);
            // console.log(data.detailMovie.img)
            this.setState({
                v: data.detailMovie,
                img: data.detailMovie.img
            })
        })
    }
}
export default MovieAbout;