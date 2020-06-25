import React from 'react';
import { Navbar } from 'components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Home,
  AboutUs,
  OurObjectives,
  Admission,
  Graduation,
  Student,
  Login,
} from './pages';
// import AboutUs from './pages/FacultyIT/AboutUs';
// import OurObjectives from './pages/FacultyIT/OurObjectives';

function App() {
  console.log(AboutUs);
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
          path="/faculty-of-it/about-us"
          component={AboutUs}
        />
        <Route
          exact
          path="/faculty-of-it/our-objectives"
          component={OurObjectives}
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
