import React from 'react';

import { Section } from 'components';
import {
  StyledGrid,
  StyledGridBanner,
  StyledGridForm,
} from './styles';
import { LoginForm } from './components';

function Login() {
  return (
    <Section padding="60px 0px 0px 0px">
      <StyledGrid container>
        <StyledGridBanner
          item
          lg={7}
          md={7}
          sm={12}
          xs={12}
        />

        <StyledGridForm
          container
          justify="center"
          alignItems="center"
          item
          lg={5}
          md={5}
          sm={12}
          xs={12}
        >
          <LoginForm />
        </StyledGridForm>
      </StyledGrid>
    </Section>
  );
}

export default Login;
