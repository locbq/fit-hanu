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
    <Section>
      <StyledGrid container>
        <StyledGridBanner
          item
          lg={7}
        />

        <StyledGridForm
          container
          justify="center"
          alignItems="center"
          item
          lg={5}
        >
          <LoginForm />
        </StyledGridForm>
      </StyledGrid>
    </Section>
  );
}

export default Login;
