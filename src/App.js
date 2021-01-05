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
  ThemeProvider,
} from '@material-ui/core';

import theme from 'theme';
import { decrypt } from 'helpers/encrypt';
import {
  Home,
  FacultyIT,
  Admission,
  Graduation,
  Student,
  Login,
  ForgotLoginInfo,
} from './pages';

const StyledContent = styled(Grid)({
  minHeight: 'calc(100vh - 60px)',
  background: '#fafafa',
});

function App() {
  const token = localStorage.getItem('token');
  const decryptToken = decrypt(token);
  const { username, password } = decryptToken;

  return (
    <ThemeProvider theme={theme}>
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
              path="/student"
              component={Student}
            />
            <Route
              path="/student/:id"
              component={Student}
            />
            <Route
              path="/forgot-login-info"
              component={ForgotLoginInfo}
            />
            <Route
              path="/forgot-login-info/:id"
              component={ForgotLoginInfo}
            />
            <Route
              path="/login"
              component={Login}
            />
          </Switch>
        </StyledContent>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
