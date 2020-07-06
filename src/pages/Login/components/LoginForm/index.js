import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Paragraph } from 'components/Headings';
import { Button } from 'components';
import {
  StyledHeading2,
  StyledGrid,
  StyledInput,
  StyledGridField,
  StyledLink,
  StyledGridForgotLink,
} from './styles';

function LoginForm({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeUsername = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setUsername(value);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setPassword(value);
  };

  const handleClickLogin = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setErrorMessage('Please enter username and password');
    } else {
      history.push('/');
    }
  };

  return (
    <StyledGrid
      container
      direction="column"
    >
      <StyledHeading2 margin="0px 0px 30px 0px">Login</StyledHeading2>
      {errorMessage
        ? (
          <Paragraph
            color="#fd4b64"
            margin="10px 0px"
            align="center"
          >
            {errorMessage}
          </Paragraph>
        )
        : null}
      <form>
        <StyledGridField>
          <Paragraph margin="0px 0px 5px 0px">Username</Paragraph>
          <StyledInput
            fullWidth
            type="text"
            value={username}
            onChange={handleChangeUsername}
          />
        </StyledGridField>

        <StyledGridField>
          <Paragraph margin="0px 0px 5px 0px">Password</Paragraph>
          <StyledInput
            fullWidth
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </StyledGridField>

        <StyledGridField
          container
          alignItems="center"
        >
          <Paragraph>Remember me</Paragraph>
          <input type="checkbox" />
        </StyledGridField>

        <StyledGridField
          container
          justify="flex-end"
        >
          <Button
            type="button"
            onClick={handleClickLogin}
          >
            Login
          </Button>
        </StyledGridField>

        <StyledGridForgotLink>
          <StyledLink to="/forgot-login-info">
            Forgot your username or password?
          </StyledLink>
        </StyledGridForgotLink>

      </form>
    </StyledGrid>
  );
}

export default withRouter(LoginForm);
