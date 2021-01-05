import React from 'react';
import {
  Grid,
  Container,
} from '@material-ui/core';

import { HighlightCard } from './components';
import { StyledSection } from './styles';
import highlights from './const';

function HighlightView() {
  return (
    <StyledSection>
      <Container fixed>
        <Grid
          container
          spacing={3}
        >
          {highlights.map((highlight) => (
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <HighlightCard
                title={highlight.title}
                image={highlight.image}
                description={highlight.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
}

export default HighlightView;
