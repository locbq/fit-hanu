import React from 'react';

import { Paragraph } from 'components/Headings';
import { ContentHeader } from 'components';
import {
  StyledList,
  StyledListItem,
  StyledHeading3,
  StyledParagraph,
} from './styles';

function OurObjectives() {
  return (
    <>
      <ContentHeader title="Our Objectives" />

      <StyledHeading3 transform="capitalize">
        Overall objective
      </StyledHeading3>
      <StyledParagraph align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem. Integer vitae ullamcorper felis. Vivamus vel elit euismod, bibendum massa et, finibus ante. Fusce eget magna scelerisque tortor congue vehicula. Aliquam diam tortor, luctus a auctor et, bibendum et nisi.
      </StyledParagraph>

      <StyledHeading3 transform="capitalize">
        Specific objective
      </StyledHeading3>
      <StyledParagraph align="justify">
        Quisque cursus ultrices bibendum. Quisque vulputate tellus eu mi commodo vestibulum. Nunc vehicula purus a diam mattis, non hendrerit orci elementum. Proin at semper ipsum. Curabitur et porttitor felis, et fermentum ligula. Duis quis nibh a nisi posuere viverra et cursus metus. Sed bibendum, ipsum vel elementum viverra, nisi eros faucibus mauris, a tincidunt felis mauris sed felis. Morbi ac enim id ligula malesuada mollis aliquet nec leo. Curabitur non ex a arcu blandit finibus eget ut est. Pellentesque pretium porttitor commodo. Fusce scelerisque justo quis sodales vehicula. Curabitur hendrerit accumsan nunc ac volutpat. Morbi at leo sollicitudin nisl sagittis scelerisque. Nulla facilisi. Mauris ut nunc vitae ligula pellentesque porttitor.
      </StyledParagraph>

      <StyledHeading3 transform="capitalize">
        Students after graduation can work at these positions
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

export default OurObjectives;
