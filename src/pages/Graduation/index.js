import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  Section,
  BreadCrumb,
  TableOfContents,
} from 'components';
import { StyledGridContent } from './styles';
import { contentList } from './const';
import { GraduationPlan } from './components';

function Graduation() {
  return (
    <Section backgroundcolor="#fafafa">
      <BreadCrumb />
      <Container fixed>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={8}
            sm={12}
            xs={12}
          >
            <StyledGridContent>
              <Switch>
                <Route
                  exact
                  path="/graduation"
                  component={GraduationPlan}
                />
                <Route
                  path="/graduation/graduation-plan"
                  component={GraduationPlan}
                />
              </Switch>
            </StyledGridContent>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <TableOfContents links={contentList} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Graduation;
