import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import { Paragraph } from 'components/Headings';
import { Button } from 'components';
import {
  encrypt,
  authen,
} from 'helpers';
import {
  styles,
  StyledHeading2,
  StyledGrid,
  StyledInput,
  StyledGridField,
  StyledLink,
  StyledGridForgotLink,
  StyledParagraphErrorMessage,
  StyledParagraphLabel,
  StyledCircularProgress,
} from './styles';

function LoginForm({ classes }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    const isUser = authen(username, password);

    if (username === '' || password === '') {
      setErrorMessage('Please enter username and password');
    } else if (isUser) {
      const token = encrypt(username, password);
      localStorage.setItem('token', token);
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = '/';
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setErrorMessage('Incorrect username or password');
      }, 1000);
    }
  };

  return (
    <StyledGrid
      container
      direction="column"
    >
      <StyledHeading2>Login</StyledHeading2>
      {errorMessage
        ? (
          <StyledParagraphErrorMessage>
            {errorMessage}
          </StyledParagraphErrorMessage>
        ) : null}
      <form>
        <StyledGridField>
          <StyledParagraphLabel>Username</StyledParagraphLabel>
          <StyledInput
            fullWidth
            type="text"
            value={username}
            onChange={handleChangeUsername}
            className={errorMessage && !username ? classes.inputError : null}
          />
        </StyledGridField>

        <StyledGridField>
          <StyledParagraphLabel>Password</StyledParagraphLabel>
          <StyledInput
            fullWidth
            type="password"
            value={password}
            onChange={handleChangePassword}
            className={errorMessage && !password ? classes.inputError : null}
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
            disabled={isLoading}
            type="button"
            onClick={handleClickLogin}
          >
            {isLoading ? <StyledCircularProgress /> : 'Login'}
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

export default withStyles(styles)(withRouter(LoginForm));
