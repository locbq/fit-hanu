import React from 'react';
import { Container } from '@material-ui/core';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { StyledGrid } from './styles';
import {
  ForgotLoginInfoForm,
  ConfirmationMessage,
} from './components';

function ForgotLoginInfo() {
  return (
    <Container fixed>
      <StyledGrid>
        <Switch>
          <Route
            exact
            path="/forgot-login-info"
            component={ForgotLoginInfoForm}
          />
          <Route
            path="/forgot-login-info/confirmation-message"
            component={ConfirmationMessage}
          />
        </Switch>
      </StyledGrid>
    </Container>
  );
}

export default ForgotLoginInfo;
