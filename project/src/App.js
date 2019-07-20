import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Footer from './components/footer'

import router from './router/index'
import GuardRouterTwo from './components/guardRouterTwo'
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    if(!localStorage.userNameList)
    localStorage.userNameList=["zhangsan,lisi,wangwu"]
    if(!localStorage.img)
   { localStorage.img=JSON.stringify([{zhangsan:"./assets/img/4fcec0724e23f.jpg"},{lisi:"./assets/img/5326d930d0609.jpg"},{wangwu:"./assets/img/57aa8b78ad493.jpg"}])
    console.log(localStorage.img)}
    this.state={
      isShowList:[]
    }
    
    }
    componentDidMount(){
      var arr=[];
      for(var i=0;i<router.length;i++){
        arr.push(router[i].isShow)
        this.setState({
          isShowList:arr
        })
      };
    }
  render() {
    return (
      <div className="App">
        
        {
            router.map((v, i) => {
              return (
                <Route className="footer" key={i} {...v} ></Route>
              )
            })
          }
       
          {router.map((v,i)=>{
                  return (
                   <Route  key={i} path={v.path} exact={v.exact}  render={()=><GuardRouterTwo {...v}></GuardRouterTwo>}></Route> 
                  )
                })}
            
        
      </div>
    )
  }
}

export default App;
