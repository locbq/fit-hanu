import React from 'react';
import {
  CircularProgress,
  Grid,
  styled,
  withStyles,
} from '@material-ui/core';

import { Heading4 } from 'components/Headings';

const StyledCircularProgress = withStyles((theme) => ({
  svg: {
    color: theme.palette.mainColor,
  },
}))(CircularProgress);

const StyledHeading4 = styled(Heading4)(() => ({
  margin: '10px 0px 0px 0px',
}));

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
      <StyledHeading4>Loading</StyledHeading4>
    </StyledGrid>
  );
}

export default Spinner;
