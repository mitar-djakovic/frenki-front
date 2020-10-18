import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { store } from './redux/store';
import LoginView from './views/login';
import HomeView from './views/home';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route path="/home" component={HomeView} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
