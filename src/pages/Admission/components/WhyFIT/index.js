import React from 'react';

import { Paragraph } from 'components/Headings';
import {
  Divider,
  StyledGridHeader,
  StyledNumberedList,
  StyledList,
  StyledListItem,
  StyledHeading2,
  StyledParagraph,
} from './styles';

function WhyFIT() {
  return (
    <>
      <StyledGridHeader>
        <StyledHeading2>Why FIT</StyledHeading2>
        <Divider />
      </StyledGridHeader>

      <StyledParagraph align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem. Integer vitae ullamcorper felis. Vivamus vel elit euismod, bibendum massa et, finibus ante. Fusce eget magna scelerisque tortor congue vehicula. Aliquam diam tortor, luctus a auctor et, bibendum et nisi.
      </StyledParagraph>
      <StyledParagraph align="justify">
        Donec nec pulvinar dolor, eget tristique risus. Duis in vulputate nisl. Nam molestie sapien a orci laoreet vestibulum. Phasellus gravida placerat ante sit amet hendrerit. Proin dapibus risus mi, a faucibus ipsum dignissim blandit. Suspendisse potenti. Suspendisse vestibulum consequat malesuada. Vestibulum sagittis vestibulum dui eget mollis. Praesent eleifend enim a urna dictum, vitae efficitur enim aliquet. Integer sit amet pellentesque velit, ut hendrerit mi.
      </StyledParagraph>

      <StyledParagraph align="justify">
        Sed vel viverra enim. Donec sollicitudin lacus ut nulla hendrerit, sed fermentum nisl sagittis. Nulla porttitor, nisi sed laoreet finibus, nisi augue pretium tortor, a efficitur arcu risus vitae lorem. Maecenas ex erat, maximus nec venenatis ut, pretium at nibh. Aliquam vel dui efficitur sapien tincidunt placerat ut eu sem.
      </StyledParagraph>

      <StyledNumberedList component="ol">
        <StyledListItem>
          <Paragraph>Donec rutrum, quam nec egestas posuere, diam sapien tristique odio, et molestie libero diam sit amet enim.</Paragraph>
        </StyledListItem>
        <StyledListItem>
          <Paragraph>Vestibulum ut lacus mattis, volutpat libero et, rhoncus sem.</Paragraph>
        </StyledListItem>
        <StyledListItem>
          <Paragraph>Cras nulla erat, sagittis vitae justo a, cursus aliquam quam. Vivamus laoreet sit amet velit a commodo. Aenean accumsan viverra leo in ornare.</Paragraph>
        </StyledListItem>
      </StyledNumberedList>

      <Paragraph
        margin="12px 0px"
        align="justify"
      >
        Donec nec pulvinar dolor, eget tristique risus. Duis in vulputate nisl. Nam molestie sapien a orci laoreet vestibulum. Phasellus gravida placerat ante sit amet hendrerit. Proin dapibus risus mi, a faucibus ipsum dignissim blandit. Suspendisse potenti. Suspendisse vestibulum consequat malesuada. Vestibulum sagittis vestibulum dui eget mollis. Praesent eleifend enim a urna dictum, vitae efficitur enim aliquet. Integer sit amet pellentesque velit, ut hendrerit mi.
      </Paragraph>

      <StyledList>
        <StyledListItem>
          <Paragraph>Donec rutrum, quam nec egestas posuere, diam sapien tristique odio, et molestie libero diam sit amet enim.</Paragraph>
        </StyledListItem>
        <StyledListItem>
          <Paragraph>Vestibulum ut lacus mattis, volutpat libero et, rhoncus sem.</Paragraph>
        </StyledListItem>
        <StyledListItem>
          <Paragraph>Cras nulla erat, sagittis vitae justo a, cursus aliquam quam. Vivamus laoreet sit amet velit a commodo. Aenean accumsan viverra leo in ornare.</Paragraph>
        </StyledListItem>
      </StyledList>
    </>
  );
}

export default WhyFIT;
