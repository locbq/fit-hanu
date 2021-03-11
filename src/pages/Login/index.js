import React, {
  lazy,
  Suspense,
} from 'react';

import Spinner from 'components/Spinner';
import {
  StyledSection,
  StyledGrid,
  StyledGridForm,
} from './styles';

const LoginForm = lazy(() => import('./components/LoginForm'));
const Banner = lazy(() => import('./components/Banner'));

function Login() {
  return (
    <Suspense fallback={<Spinner />}>
      <StyledSection>
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
      </StyledSection>
    </Suspense>
  );
}

export default Login;
