import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

import { Heading2 } from 'components/Headings';

const StyledGridHeader = styled(Grid)({
  marginBottom: '15px',
});

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: '70%',
  height: '3px',
  background: theme.palette.mainColor,
}));

const StyledHeading2 = styled(Heading2)(() => ({
  margin: '0px 0px 15px 0px',
}));

const ContentHeader = ({ title = '' }) => (
  <StyledGridHeader>
    <StyledHeading2>{title}</StyledHeading2>
    <StyledGrid />
  </StyledGridHeader>
);

export default ContentHeader;
