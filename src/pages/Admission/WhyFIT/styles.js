import {
  styled,
  Grid,
  List,
  ListItem,
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

export const StyledNumberedList = styled(List)({
  paddingLeft: '20px',
});

export const StyledList = styled(List)({
  paddingLeft: '20px',
  listStyle: '"-"',
});

export const StyledListItem = styled(ListItem)({
  display: 'list-item',
});
