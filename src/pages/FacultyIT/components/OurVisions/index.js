import React from 'react';

import { Paragraph } from 'components/Headings';
import {
  Divider,
  StyledGridHeader,
  StyledList,
  StyledListItem,
  StyledHeading2,
  StyledHeading3,
  StyledParagraph,
} from './styles';

function OurVisions() {
  return (
    <>
      <StyledGridHeader>
        <StyledHeading2>Our Visions</StyledHeading2>
        <Divider />
      </StyledGridHeader>

      <StyledHeading3 transform="capitalize">
        Core values
      </StyledHeading3>
      <StyledParagraph align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem.
      </StyledParagraph>
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

      <StyledHeading3 transform="capitalize">
        Visions
      </StyledHeading3>

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
    </>
  );
}

export default OurVisions;
