// React Router Tutorial | React For Beginners
// https://www.youtube.com/watch?v=Law7wfdg_ls&ab_channel=DevEd

import React from "react"
import './App.css';
import Nav from "./Nav"
import About from "./About"
import Shop from "./Shop"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// The ability to handle routing in routing in react is provided by BrowserRouter
// Route -> renders items based on the URL
// Switch -> makes sure it only renders out the first matching route in order and nothing else
import ItemDetail from "./ItemDetail"

function App() {
  return (
    //everything inside Router will have the ability to use routing
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/> {/* adding exact is required for the other routes to work */}
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
) 

export default App;
