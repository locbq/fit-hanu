import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

import { Heading4 } from 'components/Headings';

export const StyledGridMenuContainer = styled(Grid)(({ theme }) => ({
  background: theme.palette.secondaryColor,
  position: 'fixed',
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
  zIndex: 2,
}));

export const StyledGridMenu = styled(Grid)({
  marginTop: '60px',
});

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.white,
  textDecoration: 'none',
}));

export const StyledNavLinkDropdown = styled(NavLink)(({ theme }) => ({
  color: theme.palette.white,
  textDecoration: 'none',
  pointerEvents: 'none',
}));

export const StyledHeading4 = styled(Heading4)(({ theme }) => ({
  textTransform: 'uppercase',
  padding: '15px 25px 15px 15px',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.greyA5}`,
  '& svg': {
    color: theme.palette.white,
  },
}));

export const styles = (theme) => ({
  active: {
    color: theme.palette.mainColor,
    '& + svg': {
      color: theme.palette.mainColor,
    },
  },
});
