import React from 'react';
import { Container } from '@material-ui/core';

import {
  StyledFooter,
  StyledParagraph,
} from './styles';

function Footer() {
  return (
    <StyledFooter>
      <Container fixed>
        <StyledParagraph color="#ffffff">
          ©2020 Redesign by Loc Bui
        </StyledParagraph>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
