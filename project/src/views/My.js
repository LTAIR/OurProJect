import React from 'react'

import Search from './Search'

import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom'
  import HuoQu from "./HuoQu"

import Footer from '../components/footer'
class My extends React.Component{

    render(){
        return (
            <div>
         
                <NavLink to={"/Search"}>搜索电影</NavLink>
            
                    
           
                我的
                <Footer></Footer>
            </div>
        )
    }


}
   

export default My;