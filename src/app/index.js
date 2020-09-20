import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from './views/login';
import HomeView from './views/home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginView} />
      {/* <Route path="/login" component={HomeView} /> */}
    </Switch>
  </Router>
);

export default App;
