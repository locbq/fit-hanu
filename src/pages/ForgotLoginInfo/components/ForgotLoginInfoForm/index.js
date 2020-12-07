import React, { useState } from 'react';
import {
  withStyles,
  Grid,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ErrorMessage } from 'components';
import {
  styles,
  StyledHeading4,
  StyledParagraph,
  StyledInput,
  StyledButtonSearch,
} from './styles';

function ForgotLoginInfoForm({
  history,
  classes,
}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [errorMessageUsername, setErrorMessageUsername] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');

  const handleChangeUsername = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setUsername(value);
  };
  const handleChangeEmail = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const handleClickSearchUsername = (event) => {
    event.preventDefault();
    if (username === '') {
      setErrorMessageUsername('Please enter username');
    } else {
      history.push('/forgot-login-info/confirmation-message');
    }
  };

  const handleClickSearchEmail = (event) => {
    event.preventDefault();
    if (email === '') {
      setErrorMessageEmail('Please enter email');
    } else {
      history.push('/forgot-login-info/confirmation-message');
    }
  };

  return (
    <>
      <StyledParagraph align="center">
        To reset your password, submit your username or your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.
      </StyledParagraph>

      <Grid
        container
        justify="center"
      >
        <Grid
          item
          lg={8}
          md={8}
          sm={12}
          xs={12}
        >
          <StyledHeading4>
            Search By Username
            {' '}
            {errorMessageUsername ? <ErrorMessage text={errorMessageUsername} /> : null}
          </StyledHeading4>
          <Grid
            container
            wrap="nowrap"
          >
            <StyledInput
              fullWidth
              placeholder="123456789"
              value={username}
              onChange={handleChangeUsername}
              className={errorMessageUsername && !username ? classes.inputError : null}
            />
            <StyledButtonSearch onClick={handleClickSearchUsername}>
              <FontAwesomeIcon icon={faSearch} />
            </StyledButtonSearch>
          </Grid>

          <StyledHeading4>
            Search By Email
            {' '}
            {errorMessageEmail ? <ErrorMessage text={errorMessageEmail} /> : null}
          </StyledHeading4>
          <Grid
            container
            wrap="nowrap"
          >
            <StyledInput
              fullWidth
              placeholder="emailaddress@mail.com"
              value={email}
              onChange={handleChangeEmail}
              className={errorMessageEmail && !email ? classes.inputError : null}
            />
            <StyledButtonSearch onClick={handleClickSearchEmail}>
              <FontAwesomeIcon icon={faSearch} />
            </StyledButtonSearch>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(ForgotLoginInfoForm);
