import React from 'react';
import {
  Grid,
  Container,
} from '@material-ui/core';

import { Section } from 'components';
import {
  Announcement,
  News,
} from './components';

function ContentView() {
  return (
    <Section backgroundcolor="#fafafa">
      <Container fixed>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <News />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={12}
            xs={12}
          >
            <Announcement />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentView;
