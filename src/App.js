import React from 'react';
import {
  Navbar,
  Footer,
  ScrollRestoration,
} from 'components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  styled,
  Grid,
} from '@material-ui/core';

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

const StyledContent = styled(Grid)({
  minHeight: 'calc(100vh - 60px)',
});

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Navbar />
      <StyledContent>
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
      </StyledContent>
      <Footer />
    </Router>
  );
}

export default App;
