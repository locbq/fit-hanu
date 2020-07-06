import React from 'react';

import { Heading2 } from 'components/Headings';
import {
  Divider,
  StyledGridHeader,
} from './styles';

function HonoraryStudents() {
  return (

    <StyledGridHeader>
      <Heading2 margin="0px 0px 15px 0px">Honorary Students</Heading2>
      <Divider />
    </StyledGridHeader>

  );
}

export default HonoraryStudents;
