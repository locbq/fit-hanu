import styled from '@material-ui/core/styles/styled';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import {
  Heading3,
  Paragraph,
} from 'components/Headings';

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
