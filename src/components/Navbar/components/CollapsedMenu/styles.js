import {
  styled,
  Grid,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { Heading4 } from 'components/Headings';

export const StyledGridMenuContainer = styled(Grid)({
  background: '#231d1f',
  position: 'fixed',
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
  zIndex: 2,
});

export const StyledGridMenu = styled(Grid)({
  marginTop: '60px',
});

export const StyledNavLink = styled(NavLink)({
  color: '#ffffff',
  textDecoration: 'none',
});

export const StyledNavLinkDropdown = styled(NavLink)({
  color: '#ffffff',
  textDecoration: 'none',
  pointerEvents: 'none',
});

export const StyledHeading4 = styled(Heading4)({
  textTransform: 'uppercase',
  padding: '15px 25px 15px 15px',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(196,196,196, 0.2)',
  '& svg': {
    color: '#ffffff',
  },
});

export const styles = () => ({
  active: {
    color: '#fd8b4b',
    '& + svg': {
      color: '#fd8b4b',
    },
  },
});
