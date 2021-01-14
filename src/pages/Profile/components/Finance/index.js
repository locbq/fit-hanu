import React from 'react';

import { Heading2 } from 'components/Headings';
import { StyledChip } from './styles';

function Finance() {
  return (
    <>
      <Heading2>Current Semester</Heading2>
      <StyledChip label="helo" variant="outlined" color="pink" />
    </>
  );
}

export default Finance;
