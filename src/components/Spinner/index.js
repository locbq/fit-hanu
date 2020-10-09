import React from 'react';
import {
  CircularProgress,
  Grid,
  styled,
  withStyles,
} from '@material-ui/core';
import { Heading4 } from 'components/Headings';

const StyledCircularProgress = withStyles({
  svg: {
    color: '#fd8b4b',
  },
})(CircularProgress);

const StyledGrid = styled(Grid)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
});

function Spinner() {
  return (
    <StyledGrid>
      <StyledCircularProgress />
      <Heading4 margin="10px 0px 0px 0px">Loading</Heading4>
    </StyledGrid>
  );
}

export default Spinner;
