import React from 'react';
import './App.css';
import Search from "./components/movie_search"
import MovieDetails from "./components/movie_search/moviedetails.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router> 
      <Route exact path="/" component={Search}></Route>    
        <Switch>
          <Route path="/details/:id" component={MovieDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
