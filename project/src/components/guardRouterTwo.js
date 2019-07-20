import React from 'react'
import {
    withRouter
}   from 'react-router-dom'
import Footer from './footer';
class GuardRouterTwo extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props,111)
    }
    componentWillMount(){
        if(this.props.Authorization){
            if(!localStorage.userName){
                this.props.history.push("/login")
            }
        }
    }
    render(){
        return(
                this.props.isShow?<Footer/>:""
        )
    }
}
export default withRouter(GuardRouterTwo);