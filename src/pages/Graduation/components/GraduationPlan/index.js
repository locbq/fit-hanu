import React from 'react';

import {
  Heading2,
  Heading3,
  Paragraph,
} from 'components/Headings';
import {
  Divider,
  StyledGridHeader,
} from './styles';

function GraduationPlan() {
  return (
    <>
      <StyledGridHeader>
        <Heading2 margin="0px 0px 15px 0px">Graduation Plan</Heading2>
        <Divider />
      </StyledGridHeader>

      <Heading3>Graduation Plan for class 2015 - 2016</Heading3>

      <Paragraph
        margin="12px 0px"
        align="justify"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem. Integer vitae ullamcorper felis. Vivamus vel elit euismod, bibendum massa et, finibus ante. Fusce eget magna scelerisque tortor congue vehicula. Aliquam diam tortor, luctus a auctor et, bibendum et nisi
      </Paragraph>
    </>
  );
}

export default GraduationPlan;
