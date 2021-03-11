import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';

import { Section } from 'components';

export const StyledSection = styled(Section)(() => ({
  padding: '60px 0px 0px 0px',
}));

export const StyledGrid = styled(Grid)({
  height: 'calc(100vh - 60px)',
});

export const StyledGridForm = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '0px 15px',
  },
}));
