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
  OurVisions,
  OurStaff,
  WhyFIT,
  AdmissionInformation,
  AnnualStatistics,
  Graduation,
  Student,
  Login,
} from './pages';

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
          exact
          path="/faculty-of-IT"
          component={AboutUs}
        />
        <Route
          exact
          path="/faculty-of-IT/about-us"
          component={AboutUs}
        />
        <Route
          exact
          path="/faculty-of-IT/our-objectives"
          component={OurObjectives}
        />
        <Route
          exact
          path="/faculty-of-IT/our-visions"
          component={OurVisions}
        />
        <Route
          exact
          path="/faculty-of-IT/our-staff"
          component={OurStaff}
        />

        <Route
          exact
          path="/admission"
          component={WhyFIT}
        />
        <Route
          exact
          path="/admission/why-FIT"
          component={WhyFIT}
        />
        <Route
          exact
          path="/admission/admission-information"
          component={AdmissionInformation}
        />
        <Route
          exact
          path="/admission/annual-statistics"
          component={AnnualStatistics}
        />

        <Route path="/graduation" component={Graduation} />
        <Route path="/student" component={Student} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
