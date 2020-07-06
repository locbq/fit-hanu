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
  FacultyIT,
  Admission,
  Graduation,
  StudentActivities,
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
            path="/faculty-of-IT"
            component={FacultyIT}
          />
          <Route
            path="/faculty-of-IT/:id"
            component={FacultyIT}
          />

          <Route
            exact
            path="/admission"
            component={Admission}
          />
          <Route
            exact
            path="/admission/:id"
            component={Admission}
          />

          <Route
            path="/graduation"
            component={Graduation}
          />
          <Route
            path="/graduation/:id"
            component={Graduation}
          />
          <Route
            exact
            path="/student"
            component={StudentActivities}
          />
          <Route
            path="/student/student-activities"
            component={StudentActivities}
          />

          <Route path="/login" component={Login} />
        </Switch>
      </StyledContent>
      <Footer />
    </Router>
  );
}

export default App;
