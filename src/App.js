import React from 'react';
import { Navbar } from 'components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Home,
  About,
  Admission,
  Graduation,
  Student,
  Login,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/about"
          component={About}

        />
        <Route path="/admission" component={Admission} />
        <Route path="/graduation" component={Graduation} />
        <Route path="/student" component={Student} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
