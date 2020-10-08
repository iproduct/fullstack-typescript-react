Rimport React from 'react';
import { Link, Route, BrowserRouter as Router, Switch, useParams, withRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users/pesho">Users/pesho</Link></li>
            <li><Link to="/users/gosho">Users/gosho</Link></li>
            <li><Link to="/users/atanas">Users/atanas</Link></li>
            <li><Link to="/topics/components">React Components</Link></li>
            <li><Link to="/topics/props-vs-state">Props vs. State</Link></li>
            <li><Link to="/topics/hocs/comments/seems-advanced">React HOCs</Link></li>
            <li><Link to="/topics/hocs/comments/easy-thing">React HOCs</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/users/:userId"><Users /></Route>
          <Route path="/topics/:topicId"><Topics /></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

const Topics = withRouter(
  (props) => {
    const { match, location, history } = props;
    return (
      <React.Fragment>
        <h2>My Blog</h2>
        <h3>{match.params.topicId}</h3>
        <Switch>
          <Route path={`${match.path}/comments/:commentId`}>
            {
              () => {
                const { commentId } = useParams();
                return (
                  <React.Fragment>
                    <hr />
                    <h3>Comment Details for {match.params.topicId}:</h3>
                    <p>Comment Text: {}</p>
                  </React.Fragment>
                );
              }
            }
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
);


function Home() {
  return (<h2>Home</h2>)
}

function About() {
  return (<h2>About</h2>)
}

function Users() {
  const { userId } = useParams();
  return (
    <React.Fragment>
      <h2>Users</h2>
      <h2>UserID: {userId}</h2>
    </React.Fragment>
  );
}


