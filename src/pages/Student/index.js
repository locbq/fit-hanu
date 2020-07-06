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
import {
  HelloWorld,
  FITClosedCup,
  HANUOpenCup,
  HonoraryStudents,
} from './components';

function Student() {
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
                  path="/student"
                  component={HelloWorld}
                />
                <Route
                  path="/student/hello-world"
                  component={HelloWorld}
                />
                <Route
                  path="/student/FIT-closed-cup"
                  component={FITClosedCup}
                />
                <Route
                  path="/student/HANU-open-cup"
                  component={HANUOpenCup}
                />
                <Route
                  path="/student/honorary-students"
                  component={HonoraryStudents}
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

export default Student;
