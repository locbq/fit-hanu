import React from 'react';
import { Container } from '@material-ui/core';

import {
  Section,
  BreadCrumb,
} from 'components';

function AboutUs() {
  return (
    <Section>
      <BreadCrumb />
      <Container fixed>
        <h1>AboutUs</h1>
      </Container>
    </Section>
  );
}

export default AboutUs;
