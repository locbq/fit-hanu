import React from 'react';

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

function LoginForm() {
  return (
    <StyledGrid
      container
      direction="column"
    >
      <StyledHeading2 margin="0px 0px 30px 0px">Login</StyledHeading2>
      <form>
        <StyledGridField>
          <Paragraph margin="0px 0px 5px 0px">Username</Paragraph>
          <StyledInput
            fullWidth
            type="text"
          />
        </StyledGridField>

        <StyledGridField>
          <Paragraph margin="0px 0px 5px 0px">Password</Paragraph>
          <StyledInput
            fullWidth
            type="password"
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
          <Button type="button">Login</Button>
        </StyledGridField>

        <StyledGridForgotLink>
          <StyledLink
            href="!#"
            underline="none"
          >
            Forgot your username or password?
          </StyledLink>
        </StyledGridForgotLink>

      </form>
    </StyledGrid>
  );
}

export default LoginForm;
