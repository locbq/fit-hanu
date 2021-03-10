import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.white,
  width: '50%',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  boxShadow: '0px 16px 36px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  [theme.breakpoints.down('xs')]: {
    width: 'calc(100% - 30px)',
    boxShadow: 'none',
    background: 'none',
  },
  [theme.breakpoints.between(['xs', 'sm'])]: {
    boxShadow: 'none',
    background: 'none',
  },
}));
