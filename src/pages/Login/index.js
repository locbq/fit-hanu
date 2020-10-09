import React, {
  lazy,
  Suspense,
} from 'react';

import Spinner from 'components/Spinner';
import { Section } from 'components';
import {
  StyledGrid,
  StyledGridForm,
} from './styles';

const LoginForm = lazy(() => import('./components/LoginForm'));
const Banner = lazy(() => import('./components/Banner'));

function Login() {
  return (
    <Suspense fallback={<Spinner />}>
      <Section padding="60px 0px 0px 0px">
        <StyledGrid container>
          <Banner />

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
    </Suspense>
  );
}

export default Login;
