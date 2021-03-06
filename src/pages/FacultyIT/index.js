import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';

import {
  BreadCrumb,
  TableOfContents,
} from 'components';
import {
  StyledGridContent,
  StyledSection,
} from './styles';
import { contentList } from './const';
import {
  AboutUs,
  OurObjectives,
  OurStaff,
  OurVisions,
} from './components';

function FacultyIT() {
  const location = useLocation();
  const currentLocation = location.pathname.split('/')[2];

  const currentContent = (currLocation) => {
    switch (currLocation) {
      case undefined:
        return <AboutUs />;
      case 'about-us':
        return <AboutUs />;
      case 'our-objectives':
        return <OurObjectives />;
      case 'our-staff':
        return <OurStaff />;
      case 'our-visions':
        return <OurVisions />;
      default:
        return <></>;
    }
  };

  return (
    <StyledSection>
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
              {currentContent(currentLocation)}
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
    </StyledSection>
  );
}

export default FacultyIT;
