import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import { Paragraph } from 'components/Headings';
import { Button } from 'components';
import { encrypt } from 'helpers/encrypt';
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
} from './styles';

function LoginForm({
  history,
  classes,
}) {
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
      const token = encrypt(username, password);
      localStorage.setItem('token', token);
      history.push('/');
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

export default withStyles(styles)(withRouter(LoginForm));
