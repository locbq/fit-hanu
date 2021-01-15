import {
  styled,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const StyledGridHeader = styled(Grid)({
  marginBottom: '15px',
});

export const StyledGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.white,
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
}));

export const Divider = styled(Grid)(({ theme }) => ({
  width: '70%',
  height: '3px',
  background: theme.palette.mainColor,
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  transition: '0.25s ease-in-out',
  color: theme.palette.darkGrey33,
  '&:hover': {
    color: theme.palette.mainColor,
  },
}));

export const StyledList = styled(List)({
  paddingLeft: '20px',
});

export const StyledListItem = styled(ListItem)({
  display: 'list-item',
});

export const styles = (theme) => ({
  active: {
    color: theme.palette.mainColor,
  },
});
