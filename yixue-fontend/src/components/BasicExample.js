import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Counter from '../Counter';
import styles from '../styles/BasicExample-m.css';
import ReduxDemo from './ReduxDemo';
import store from '../stores';
export default class BasicExample extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <p className={styles.red}>Red Text</p>
          <ul>
            <li><Link to="/">Home122</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/counter">Counter</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/counter" component={Counter}/>
        </div>
      </Router>
      </Provider>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <ReduxDemo/>
  </div>
)
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
