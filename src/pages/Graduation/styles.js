import {
  styled,
  Grid,
} from '@material-ui/core';

import { Section } from 'components';

export const StyledSection = styled(Section)(({ theme }) => ({
  background: theme.palette.greyFA,
}));

export const StyledGridContent = styled(Grid)(({ theme }) => ({
  background: theme.palette.white,
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
}));
