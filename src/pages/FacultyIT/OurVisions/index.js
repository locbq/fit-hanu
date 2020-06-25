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
  StyledList,
  StyledListItem,
} from './styles';

function OurVisions() {
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
                <Heading2 margin="0px 0px 15px 0px">Our Visions</Heading2>
                <Divider />
              </StyledGridHeader>

              <Heading3
                margin="12px 0px"
                transform="capitalize"
              >
                Core values
              </Heading3>
              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem.
              </Paragraph>
              <StyledList>
                <StyledListItem>
                  <Paragraph>Vestibulum venenatis, mauris in dictum congue</Paragraph>
                </StyledListItem>
                <StyledListItem>
                  <Paragraph>Nulla quis ex ultrices, pretium ligula id, elementum nunc</Paragraph>
                </StyledListItem>
                <StyledListItem>
                  <Paragraph>Vestibulum venenatis, mauris in dictum congueCras ultrices massa quis mauris auctor rhoncus. Nunc non diam vel odio sollicitudin ultricies in posuere dui</Paragraph>
                </StyledListItem>
                <StyledListItem>
                  <Paragraph>Donec scelerisque ipsum non justo pulvinar tincidunt. Quisque quis dictum turpis, et blandit metus. Morbi egestas dignissim cursus.</Paragraph>
                </StyledListItem>
              </StyledList>

              <Heading3
                margin="24px 0px 12px 0px"
                transform="capitalize"
              >
                Visions
              </Heading3>
              <Paragraph
                margin="12px 0px"
                align="justify"
              >
                <StyledList>
                  <StyledListItem>
                    <Paragraph>Vestibulum venenatis, mauris in dictum congue</Paragraph>
                  </StyledListItem>
                  <StyledListItem>
                    <Paragraph>Nulla quis ex ultrices, pretium ligula id, elementum nunc</Paragraph>
                  </StyledListItem>
                  <StyledListItem>
                    <Paragraph>Vestibulum venenatis, mauris in dictum congueCras ultrices massa quis mauris auctor rhoncus. Nunc non diam vel odio sollicitudin ultricies in posuere dui</Paragraph>
                  </StyledListItem>
                  <StyledListItem>
                    <Paragraph>Donec scelerisque ipsum non justo pulvinar tincidunt. Quisque quis dictum turpis, et blandit metus. Morbi egestas dignissim cursus.</Paragraph>
                  </StyledListItem>
                </StyledList>
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

export default OurVisions;
