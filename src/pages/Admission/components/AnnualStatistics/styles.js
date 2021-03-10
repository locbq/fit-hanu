import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TableCell from '@material-ui/core/TableCell';

import {
  Heading3,
  Heading4,
} from 'components/Headings';

export const StyledGridContent = styled(Grid)(({ theme }) => ({
  background: theme.palette.white,
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
}));

export const StyledHeading3 = styled(Heading3)(() => ({
  margin: '20px 0px 12px 0px',
}));

export const StyledHeading4 = styled(Heading4)(() => ({
  margin: '0px 0px 20px 0px',
}));

export const StyledList = styled(List)({
  paddingLeft: '20px',
});

export const StyledListItem = styled(ListItem)({
  display: 'list-item',
});

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontFamily: theme.typography.fontFamily.text,
}));

export const StyledTableCellData = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.text,
}));
