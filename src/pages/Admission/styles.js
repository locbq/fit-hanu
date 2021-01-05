import {
  styled,
  Grid,
} from '@material-ui/core';

import { Section } from 'components';

export const StyledSection = styled(Section)(({ theme }) => ({
  background: theme.palette.backgroundGrey,
}));

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
