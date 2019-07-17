import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import router from './router/index'
class  App extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render(){
    return (
      <div className="App">
        <Router>
        <NavLink to={"/"}>电影</NavLink>
        <NavLink to={"/cinema"}>影院</NavLink>
        <NavLink to={"/my"}>我的</NavLink>
         {
          router.map((v,i)=>{
            return(
                <Route key={i} {...v} ></Route>
            )
          })
         }
        </Router>
      </div>
    )
  }
}

export default App;
