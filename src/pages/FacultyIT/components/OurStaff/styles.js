import {
  styled,
  Grid,
} from '@material-ui/core';

import {
  Heading2,
  Heading3,
} from 'components/Headings';

export const StyledGridContent = styled(Grid)({
  background: '#ffffff',
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
});

export const Divider = styled(Grid)({
  width: '70%',
  height: '3px',
  background: '#fd8b4b',
});

export const StyledGridHeader = styled(Grid)({
  marginBottom: '15px',
});

export const StyledHeading2 = styled(Heading2)(() => ({
  margin: '0px 0px 15px 0px',
}));

export const StyledHeading3 = styled(Heading3)(() => ({
  margin: '24px 0px',
}));
