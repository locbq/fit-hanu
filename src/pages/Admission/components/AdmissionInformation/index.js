import React from 'react';

import { Heading3 } from 'components/Headings';
import {
  Link,
  ContentHeader,
} from 'components';
import { StyledParagraph } from './styles';

function AdmissionInformation() {
  return (
    <>
      <ContentHeader title="Admission Information" />

      <Heading3>Admission Plan</Heading3>
      <StyledParagraph align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo et arcu eleifend viverra porttitor sed purus. Fusce faucibus hendrerit massa vel commodo. Duis consequat tellus sit amet justo lobortis ultrices. Ut at semper mauris. Aenean efficitur velit ullamcorper, condimentum odio in, maximus odio.
        {' '}
        <Link
          href="http://hanu.vn/vn/chinh-quy.html"
          underline="none"
        >
          Click here to update about admission plan
        </Link>
      </StyledParagraph>

      <Heading3>Admission Plan Class 2015 - 2016</Heading3>
      <StyledParagraph align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo et arcu eleifend viverra porttitor sed purus. Fusce faucibus hendrerit massa vel commodo. Duis consequat tellus sit amet justo lobortis ultrices. Ut at semper mauris. Aenean efficitur velit ullamcorper, condimentum odio in, maximus odio.
        {' '}
        <Link
          href="http://hanu.vn/vn/chinh-quy.html"
          underline="none"
        >
          Click here to see admission statistics of previous years
        </Link>
      </StyledParagraph>
    </>
  );
}

export default AdmissionInformation;
