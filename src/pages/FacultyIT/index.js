import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AboutUs from './AboutUs';

function FacultyIT() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/faculty-it/about-us"
          component={AboutUs}
        />
      </Switch>
    </Router>
  );
}

export default FacultyIT;
