import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  height: '60px',
  background: theme.palette.secondaryColor,
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
  },
}));

export const StyledGridNav = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    height: '60px',
  },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.mainColor,
  textDecoration: 'none',
  width: '100%',
  height: '100%',
  '& h3': {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const styles = (theme) => ({
  active: {
    '& h3': {
      background: theme.palette.mainColor,
      color: theme.palette.white,
    },
  },
});
