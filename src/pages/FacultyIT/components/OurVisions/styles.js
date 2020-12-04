import {
  styled,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import { Heading2 } from 'components/Headings';

export const StyledGridContent = styled(Grid)({
  background: '#ffffff',
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
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
  paddingLeft: '10px',
  listStyle: '"-"',
});

export const StyledListItem = styled(ListItem)({
  display: 'list-item',
});

export const StyledHeading2 = styled(Heading2)(() => ({
  margin: '0px 0px 15px 0px',
}));
