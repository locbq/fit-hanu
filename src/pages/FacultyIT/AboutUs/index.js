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
  Paragraph,
} from 'components/Headings';
import { contentList } from './const';
import {
  StyledGridContent,
  Divider,
  StyledGridHeader,
} from './styles';

function AboutUs() {
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
          >
            <StyledGridContent>
              <StyledGridHeader>
                <Heading2 margin="0px 0px 15px 0px">About Us</Heading2>
                <Divider />
              </StyledGridHeader>

              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem. Integer vitae ullamcorper felis. Vivamus vel elit euismod, bibendum massa et, finibus ante. Fusce eget magna scelerisque tortor congue vehicula. Aliquam diam tortor, luctus a auctor et, bibendum et nisi.

              </Paragraph>

              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                Quisque cursus ultrices bibendum. Quisque vulputate tellus eu mi commodo vestibulum. Nunc vehicula purus a diam mattis, non hendrerit orci elementum. Proin at semper ipsum. Curabitur et porttitor felis, et fermentum ligula. Duis quis nibh a nisi posuere viverra et cursus metus. Sed bibendum, ipsum vel elementum viverra, nisi eros faucibus mauris, a tincidunt felis mauris sed felis. Morbi ac enim id ligula malesuada mollis aliquet nec leo. Curabitur non ex a arcu blandit finibus eget ut est. Pellentesque pretium porttitor commodo. Fusce scelerisque justo quis sodales vehicula. Curabitur hendrerit accumsan nunc ac volutpat. Morbi at leo sollicitudin nisl sagittis scelerisque. Nulla facilisi. Mauris ut nunc vitae ligula pellentesque porttitor.
              </Paragraph>

              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                Vestibulum venenatis, mauris in dictum congue, nisl felis dapibus mauris, nec consequat mi orci consectetur lorem. Donec tempus felis metus, posuere tincidunt elit vestibulum in. Nulla quis ex ultrices, pretium ligula id, elementum nunc. Cras ultrices massa quis mauris auctor rhoncus. Nunc non diam vel odio sollicitudin ultricies in posuere dui.
              </Paragraph>
            </StyledGridContent>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
          >
            <TableOfContents links={contentList} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default AboutUs;
