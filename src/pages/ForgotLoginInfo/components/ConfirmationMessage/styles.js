import { styled } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Paragraph } from 'components/Headings';

export const StyledParagraph = styled(Paragraph)({
  fontStyle: 'italic',
  paddingBottom: '20px',
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
});
