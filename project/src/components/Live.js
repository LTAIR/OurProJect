import React from 'react'
class Live extends React.Component{
    render(){
        return(
            <div>
             <div className={"nav-head"}><span onClick={()=>{this.props.history.go(-1)}}>&lt;</span><span>猫眼电影</span></div>
                在线观影
            </div>
        )
    }
}
export default Live