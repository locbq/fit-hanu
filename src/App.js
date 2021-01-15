import React, { useEffect, useState } from 'react';
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

import {
  Navbar,
  NavbarLoggedIn,
  Footer,
  ScrollRestoration,
} from 'components';
import theme from 'theme';
import { decrypt } from 'helpers';
import {
  Home,
  FacultyIT,
  Admission,
  Graduation,
  Student,
  Login,
  ForgotLoginInfo,
  Profile,
} from './pages';

const StyledContent = styled(Grid)({
  minHeight: 'calc(100vh - 60px)',
  background: '#fafafa',
});

function App() {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState('');

  useEffect(() => {
    if (token) {
      const decryptToken = decrypt(token);
      const { username } = decryptToken;
      setUser(username);
    }
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollRestoration />
        {token ? <NavbarLoggedIn username={user} /> : <Navbar />}
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
            <Route
              path="/profile"
              component={Profile}
            />
          </Switch>
        </StyledContent>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
