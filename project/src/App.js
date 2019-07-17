import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import router from './router/index'
import Footer from './components/footer'
class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.movieList)
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
        
         <Footer></Footer>
        </Router>
      </div>
    )
  }
}

export default App;
