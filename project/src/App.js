import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Movie from './views/Movie'
import Cinema from './views/Cinema'
import My from './views/My'
import Show from './views/Show'
import Search from './views/Search'
import Login from './views/Login'
import router from './router/index'
function App() {
  return (
    <div className="App">
      <Router>
      <NavLink to={"/"}>电影</NavLink>
      <NavLink to={"/cinema"}>影院</NavLink>
      <NavLink to={"/my"}>我的</NavLink>
       {
        router.map((v,i)=>{
          return(
              <Route {...v} ></Route>
          )
        })
       }
      </Router>
    </div>
  );
}

export default App;
