import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Topics() {
  const match = useRouteMatch();
  return (
    <React.Fragment>
      <h2>Topics</h2>
      <ul>
        <li><Link to={`${match.url}/spa/components`}>Components</Link></li>
        <li><Link to={`${match.url}/react/props-vs-state`}>Properties vs. State</Link></li>
        <li><Link to={`${match.url}/react/refs`}>Refs to Components</Link></li>
        <li><Link to={`${match.url}/state-management/controlled-or-uncontrolled`}>To Control or Not to Control?</Link></li>
      </ul>
        <Route path={`${match.path}/:category/:topicName`}>
          <Topic />
        </Route>
        <Route path={`${match.path}/:catName`}>
          <TopicChat />
        </Route>
    </React.Fragment>
  )
}

interface TopicParams {
  category: string;
  topicName: string;
}

function Topic() {
  const params = useParams<TopicParams>();
  return (
    <h3>Requested Topic Name: {params.category} / {params.topicName}</h3>
  );
}

interface TopicChatParams {
  catName: string;
}
function TopicChat() {
  const params = useParams<TopicChatParams>();
  return (
    <h3>Chat for Category: {params.catName}</h3>
  );
}