import React from 'react';
import { Container } from '@material-ui/core';

import {
  StyledFooter,
  StyledParagraph,
} from './styles';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <StyledFooter>
      <Container fixed>
        <StyledParagraph>
          ©
          {currentYear}
          {' '}
          Redesign by Loc Bui
        </StyledParagraph>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
