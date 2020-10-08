import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (<h2>Home</h2>)
}

function About() {
  return (<h2>Home</h2>)
}

function Users() {
  return (<h2>Home</h2>)
}


