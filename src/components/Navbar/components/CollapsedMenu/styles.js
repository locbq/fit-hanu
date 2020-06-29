import {
  styled,
  Grid,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { Heading3 } from 'components/Headings';

export const StyledGridMenu = styled(Grid)({
  background: '#231d1f',
  position: 'fixed',
  width: '100%',
  height: (props) => (props.showmenu === 'false' ? '0' : '100%'),
  visibility: (props) => (props.showmenu === 'false' ? 'hidden' : 'visible'),
  transition: '0.15s linear',
  marginTop: '60px',
  zIndex: '1',
});

export const StyledNavLink = styled(NavLink)({
  color: '#ffffff',
  textDecoration: 'none',
});

export const StyledHeading3 = styled(Heading3)({
  textTransform: 'uppercase',
});
