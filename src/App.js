import React from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Posts from './Posts.js';
import Profile from './Profile';
import CodeIcon from '@material-ui/icons/Code';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid ">
            <Link to="/home" class="navbar-brand">
              <CodeIcon className="nav-icon" />
              <span className="crud_app">CRUD APP</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/home" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/posts" class="nav-link">
                    Post
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/profile/:id" component={Profile} />

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
