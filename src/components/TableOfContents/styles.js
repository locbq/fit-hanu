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

export const StyledGrid = styled(Grid)({
  background: '#ffffff',
  padding: '20px',
});

export const Divider = styled(Grid)({
  width: '70%',
  height: '3px',
  background: '#fd8b4b',
});

export const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  transition: '0.25s ease-in-out',
  color: '#000',
  '&:hover': {
    color: '#fd8b4b',
  },
});

export const StyledList = styled(List)({
  paddingLeft: '20px',
});

export const StyledListItem = styled(ListItem)({
  display: 'list-item',
});
