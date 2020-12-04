import React from 'react';

import {
  Heading2,
  Heading3,
  Paragraph,
} from 'components/Headings';
import { Link } from 'components';
import {
  Divider,
  StyledGridHeader,
} from './styles';

function AdmissionInformation() {
  return (
    <>
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
        <Link
          href="http://hanu.vn/vn/chinh-quy.html"
          underline="none"
        >
          Click here to update about admission plan
        </Link>
      </Paragraph>

      <Heading3>Admission Plan Class 2015 - 2016</Heading3>
      <Paragraph
        margin="12px 0px"
        align="justify"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in justo et arcu eleifend viverra porttitor sed purus. Fusce faucibus hendrerit massa vel commodo. Duis consequat tellus sit amet justo lobortis ultrices. Ut at semper mauris. Aenean efficitur velit ullamcorper, condimentum odio in, maximus odio.
        {' '}
        <Link
          href="http://hanu.vn/vn/chinh-quy.html"
          underline="none"
        >
          Click here to see admission statistics of previous years
        </Link>
      </Paragraph>
    </>
  );
}

export default AdmissionInformation;
