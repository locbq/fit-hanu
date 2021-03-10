import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {
  Heading3,
  Paragraph,
} from 'components/Headings';

export const StyledGridContent = styled(Grid)({
  background: '#ffffff',
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
});

export const StyledList = styled(List)({
  paddingLeft: '10px',
  listStyle: '"-"',
});

export const StyledListItem = styled(ListItem)({
  display: 'list-item',
});

export const StyledHeading3 = styled(Heading3)(() => ({
  margin: '12px 0px',
}));

export const StyledParagraph = styled(Paragraph)(() => ({
  margin: '12px 0px',
}));
