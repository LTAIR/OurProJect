import React from 'react'
import {withRouter} from 'react-router-dom'
class Movie extends React.Component{
    
    render(){
        return (
        <div className={"movieAll"}  onClick={()=>this.props.history.push("/detailmovie/"+this.props.v.id)}>
            <div className={"movieLeft"}>
                <img src={this.props.Tools.change(this.props.v.img, "128.180")} />
            </div>
            <div className={"movieRight"}>
                <p><i>{this.props.v.nm}</i><span style={{ display: this.props.v.version ? "block" : "none" }}>{this.props.v.version}</span></p>
                {this.props.v.sc !== 0 &&this.props. v.globalReleased ? <p className={"sc"}>观众评 <b>{this.props.Tools.double(this.props.v.sc)}</b></p> : (this.props.v.sc === 0 && !this.props.v.globalReleased ? <p className={"sc"}><b>{this.props.v.wish}</b> 人想看</p> : <p className={"sc"}>点映评 <b>{this.props.Tools.double(this.props.v.sc)}</b></p>)}
                <p className={"movieStar"}>主演:{this.props.v.star}</p>
                <p className={"movieShow"}>{this.props.v.showInfo}</p>
            </div>
            <input type="button" value={this.props.v.globalReleased ? "购票" : "预售"} style={{ backgroundColor: this.props.v.globalReleased ? "red" : "skyblue" }} />
        </div>
        )
    }
}
export default withRouter(Movie);

