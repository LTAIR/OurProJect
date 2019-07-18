import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import router from './router/index'
class App extends React.Component {
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
        </Router>
      </div>
    )
  }
}

export default App;
