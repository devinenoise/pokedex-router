import React, { Component } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.js';
import Detail from './Detail';
import Home from './Home';
import About from './About.js';

//stylesheet
import './App.css';


export default class App extends Component {
  //setting empty state


  render() {

    return (

      <Router>
        <Header />
        <header>
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/about-me/a">About</Link>
        </header>
        <Switch>
          <Route exact path="/:name?" component={Home} />

          <Route path="/about-me/" component={About} />

          <Route path="/pokemon/:pokeId" component={Detail} />

        </Switch>
      </Router>
    );
  }
}
