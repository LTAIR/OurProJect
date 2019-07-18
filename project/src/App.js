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
        <Router>
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
            
        </Router>
      </div>
    )
  }
}

export default App;
