import {
  styled,
  Grid,
} from '@material-ui/core';

import {
  Heading2,
  Paragraph,
} from 'components/Headings';

export const StyledGridContent = styled(Grid)({
  background: '#ffffff',
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
});

export const StyledHeading2 = styled(Heading2)(() => ({
  margin: '0px 0px 15px 0px',
}));

export const Divider = styled(Grid)({
  width: '70%',
  height: '3px',
  background: '#fd8b4b',
});

export const StyledGridHeader = styled(Grid)({
  marginBottom: '15px',
});

export const StyledParagraph = styled(Paragraph)(() => ({
  margin: '12px 0px',
}));
