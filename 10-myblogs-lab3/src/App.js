import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, withRouter } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-vs-state`}>
            Props v. State
                    </Link>
        </li>
        <li>
          <Link to={`${match.url}/react-hooks`}>
            React Hooks
                    </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <MyTopic />
        </Route>
        <Route exact path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

const MyTopic = withRouter(Topic);

function Topic(props) {
  console.log(props);
  // let { topicId } = useParams();
  return (
    <React.Fragment>
      <h3>Requested topic ID: {props.match.params.topicId} </h3>
      <p>{JSON.stringify(props)}</p>
    </React.Fragment>
  );
}
