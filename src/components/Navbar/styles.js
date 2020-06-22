import {
  styled,
  Container,
  AppBar,
  Grid,
} from '@material-ui/core';

import {
  NavLink,
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledAppBar = styled(AppBar)({
  height: '60px',
  background: '#231d1f',
});

export const StyledContainer = styled(Container)({
  height: '100%',
});

export const StyledGridNav = styled(Grid)({
  height: '100%',
});

export const StyledNavBrand = styled(Link)({
  fontFamily: '"Montserrat", sans-serif',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '26px',
  fontWeight: 'bold',
  padding: '0px 10px',
  '& span': {
    color: '#fd8b4b',
  },
});

export const StyledNavLink = styled(NavLink)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '125px',
  textDecoration: 'none',
  color: '#fd8b4b',
  textTransform: 'uppercase',
  fontFamily: '"Open Sans", sans-serif',
  '&:hover': {
    background: '#fd8b4b',
    color: '#ffffff',
    transition: '0.25s ease-in-out',
  },
});

export const StyledFAIcon = styled(FontAwesomeIcon)({
  marginLeft: '5px',
});

export const StyledGridHover = styled(Grid)({
  height: '100%',
  '&:hover > div': {
    display: 'flex',
  },
});

export const StyledGridDropdown = styled(Grid)({
  position: 'absolute',
  display: 'none',
  width: '250px',
  background: '#231d1f',
  '& a': {
    padding: '10px',
    color: '#fd8b4b',
    textDecoration: 'none',
    fontFamily: '"Open Sans", sans-serif',
    '&:hover': {
      background: '#fd8b4b',
      color: '#ffffff',
      textDecoration: 'none',
      transition: '0.25s ease-in-out',
    },
  },
});

export const styles = () => ({
  loginNav: {
    marginLeft: 'auto',
  },
});
