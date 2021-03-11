import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { StyledSection } from './styles';
import {
  Announcement,
  News,
} from './components';

function ContentView() {
  return (
    <StyledSection>
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
    </StyledSection>
  );
}

export default ContentView;
