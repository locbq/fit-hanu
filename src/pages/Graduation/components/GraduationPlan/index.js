import React from 'react';

import { Heading3 } from 'components/Headings';
import {
  Divider,
  StyledGridHeader,
  StyledHeading2,
  StyledParagraph,
} from './styles';

function GraduationPlan() {
  return (
    <>
      <StyledGridHeader>
        <StyledHeading2>Graduation Plan</StyledHeading2>
        <Divider />
      </StyledGridHeader>

      <Heading3>Graduation Plan for class 2015 - 2016</Heading3>

      <StyledParagraph align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem. Integer vitae ullamcorper felis. Vivamus vel elit euismod, bibendum massa et, finibus ante. Fusce eget magna scelerisque tortor congue vehicula. Aliquam diam tortor, luctus a auctor et, bibendum et nisi
      </StyledParagraph>
    </>
  );
}

export default GraduationPlan;
