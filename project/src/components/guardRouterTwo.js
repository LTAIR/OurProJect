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
    
    render(){
        return(
                this.props.isShow?<Footer/>:""
        )
    }
}
export default withRouter(GuardRouterTwo);