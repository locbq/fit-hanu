import React from 'react';

import {
  StyledParagraph,
  StyledLink,
  StyledButton,
} from './styles';

function ConfirmationMessage() {
  return (
    <>
      <StyledParagraph align="center">
        If you supplied a correct username or email address then an email should have been sent to you.
      </StyledParagraph>
      <StyledParagraph align="center">
        It contains easy instructions to confirm and complete this password change. If you continue to have difficulty, please contact the site administrator.
      </StyledParagraph>

      <StyledLink to="/">
        <StyledButton>Continue</StyledButton>
      </StyledLink>
    </>
  );
}

export default ConfirmationMessage;
