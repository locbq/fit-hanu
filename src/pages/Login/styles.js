import {
  styled,
  Grid,
} from '@material-ui/core';

export const StyledGrid = styled(Grid)({
  height: 'calc(100vh - 60px)',
});

export const StyledGridForm = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '0px 15px',
  },
}));
