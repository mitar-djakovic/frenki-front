import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from './views/Login';
import HomeView from './views/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
    </Switch>
  </Router>
);

export default App;
