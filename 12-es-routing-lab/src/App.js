import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch, useParams, withRouter } from 'react-router-dom';
import './App.css';

const blogsRepo = [
  {
    id: 'coponents',
    title: 'Components',
    text: 'All about Components - can be functions.',
    comments: [{id:'comp-easy', text: 'Comps are reasy.'}, {id:'comp-hard', text: 'Comps are hard.'}]
  },
  {
    id: 'hocs',
    title: 'HOCs',
    text: 'All about HOCs',
    comments: [{id:'hoc-easy', text: 'HOCs are reasy.'}, {id:'hoc-hard', text: 'HOCs are hard.'}]
  }
];


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
            { blogsRepo.map(blog => (<li key={blog.id}><Link to={`/topics/${blog.id}`}>{blog.title}</Link></li>)) }
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
    const post = blogsRepo.find(post => post.id === match.params.topicId);
    return (
      <React.Fragment>
        <h2>My Blog</h2>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
        <h4>Comments:</h4>
        <ul>
            { post.comments.map(c => (<li key={c.id}><Link to={`${match.url}/comments/${c.id}`}>{c.id}</Link></li>)) }
        </ul>
        <Switch>
          <Route path={`${match.path}/comments/:commentId`}>
            <CommentDetails />
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

const CommentDetails = () => {
  const { commentId, topicId } = useParams();
  const comment = blogsRepo
        .find(blog => blog.id === topicId).comments.find(c => c.id === commentId);
  return (
    <React.Fragment>
      <hr />
      <h3>Comment Details for {topicId}</h3>
      <p>Comment ID: {commentId}</p>
      <p>Comment Text: {comment.text}</p>
    </React.Fragment>
  );
}


