import {
  styled,
  Grid,
  List,
  ListItem,
  Link,
  TableCell,
} from '@material-ui/core';

export const StyledGridContent = styled(Grid)({
  background: '#ffffff',
  padding: '20px',
});

export const Divider = styled(Grid)({
  width: '70%',
  height: '3px',
  background: '#fd8b4b',
});

export const StyledGridHeader = styled(Grid)({
  marginBottom: '15px',
});

export const StyledList = styled(List)({
  paddingLeft: '20px',
});

export const StyledListItem = styled(ListItem)({
  display: 'list-item',
});

export const StyledLink = styled(Link)({
  color: '#fd8b4b',
  transition: '0.25s ease-in-out',
  fontFamily: '"Open Sans", sans-serif',
  '&:hover': {
    color: '#231d1f',
  },
});

export const StyledTableCellHead = styled(TableCell)({
  fontWeight: 'bold',
  fontFamily: '"Open Sans", sans-serif',
});

export const StyledTableCellData = styled(TableCell)({
  fontFamily: '"Open Sans", sans-serif',
});
