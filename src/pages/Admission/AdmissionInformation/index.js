import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';

import {
  Section,
  BreadCrumb,
  TableOfContents,
} from 'components';
import {
  Heading2,
  Heading3,
  Paragraph,
} from 'components/Headings';
import { contentList } from './const';
import {
  StyledGridContent,
  Divider,
  StyledGridHeader,
  StyledLink,
} from './styles';

function AdmissionInformation() {
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
              <StyledGridHeader>
                <Heading2 margin="0px 0px 15px 0px">Admission Information</Heading2>
                <Divider />
              </StyledGridHeader>

              <Heading3>Admission Plan</Heading3>
              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo et arcu eleifend viverra porttitor sed purus. Fusce faucibus hendrerit massa vel commodo. Duis consequat tellus sit amet justo lobortis ultrices. Ut at semper mauris. Aenean efficitur velit ullamcorper, condimentum odio in, maximus odio.
                {' '}
                <StyledLink
                  href="http://hanu.vn/vn/chinh-quy.html"
                  underline="none"
                >
                  Click here to update about admission plan
                </StyledLink>
              </Paragraph>

              <Heading3>Admission Plan Class 2015 - 2016</Heading3>
              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo et arcu eleifend viverra porttitor sed purus. Fusce faucibus hendrerit massa vel commodo. Duis consequat tellus sit amet justo lobortis ultrices. Ut at semper mauris. Aenean efficitur velit ullamcorper, condimentum odio in, maximus odio.
                {' '}
                <StyledLink
                  href="http://hanu.vn/vn/chinh-quy.html"
                  underline="none"
                >
                  Click here to see admission statistics of previous years
                </StyledLink>
              </Paragraph>
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

export default AdmissionInformation;
