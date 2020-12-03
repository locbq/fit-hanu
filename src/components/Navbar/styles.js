import {
  styled,
  Container,
  AppBar,
  Grid,
  Button,
} from '@material-ui/core';
import {
  NavLink,
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '60px',
  background: theme.palette.secondaryColor,
}));

export const StyledContainer = styled(Container)({
  height: '100%',
  zIndex: 10,
});

export const StyledGridNav = styled(Grid)({
  height: '100%',
});

export const StyledNavBrand = styled(Link)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  color: theme.palette.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '26px',
  fontWeight: 'bold',
  padding: '0px 15px 0px 0px',
  '& span': {
    color: theme.palette.mainColor,
    transition: '0.25s ease-in-out',
  },
  transition: '0.25s ease-in-out',
  '&:hover': {
    color: theme.palette.mainColor,
    '& span': {
      color: theme.palette.white,
    },
  },
}));

export const StyledGridNavLinks = styled(Grid)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '125px',
  textDecoration: 'none',
  color: theme.palette.mainColor,
  textTransform: 'uppercase',
  padding: '0px 5px',
  fontFamily: '"Open Sans", sans-serif',
  pointerEvents: 'none',
  transition: '0.25s ease-in-out',
}));

export const StyledNavLinkLogin = styled(NavLink)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '125px',
  textDecoration: 'none',
  color: theme.palette.mainColor,
  textTransform: 'uppercase',
  padding: '0px 5px',
  fontFamily: '"Open Sans", sans-serif',
  '&:hover': {
    background: theme.palette.mainColor,
    color: theme.palette.white,
    transition: '0.25s ease-in-out',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledFAIcon = styled(FontAwesomeIcon)({
  marginLeft: '5px',
});

export const StyledGridHover = styled(Grid)(({ theme }) => ({
  height: '100%',
  transition: '0.25s ease-in-out',
  '&:hover > a': {
    background: theme.palette.mainColor,
    color: theme.palette.white,
  },
  '&:hover > div': {
    display: 'flex',
  },
}));

export const StyledGridDropdown = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  display: 'none',
  width: '250px',
  background: theme.palette.secondaryColor,
  '& a': {
    padding: '10px',
    color: theme.palette.mainColor,
    textDecoration: 'none',
    fontFamily: '"Open Sans", sans-serif',
    transition: '0.25s ease-in-out',
    '&:hover': {
      background: theme.palette.mainColor,
      color: theme.palette.white,
      textDecoration: 'none',
    },
  },
}));

export const StyledButtonCollapsedMenu = styled(Button)(({ theme }) => ({
  display: 'none',
  padding: '0px',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    marginLeft: 'auto',
    color: theme.palette.white,
    fontSize: '20px',
  },
}));

export const styles = (theme) => ({
  loginNav: {
    marginLeft: 'auto',
  },
  active: {
    background: theme.palette.mainColor,
    color: theme.palette.white,
  },
  activeDropdown: {
    background: theme.palette.secondaryColor,
    color: `${theme.palette.white} !important`,
  },
});
