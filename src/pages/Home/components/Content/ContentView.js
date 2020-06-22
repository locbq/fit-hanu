import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Section } from 'components';
import { Announcement, News } from './components';

function ContentView() {
  return (
    <Section>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <News />
          </Grid>
          <Grid item lg={8}>
            <Announcement />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentView;
