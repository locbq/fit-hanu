import styled from '@material-ui/core/styles/styled';
import { Link } from 'react-router-dom';

import { Paragraph } from 'components/Headings';
import { Button } from 'components';

export const StyledParagraph = styled(Paragraph)({
  fontStyle: 'italic',
  paddingBottom: '20px',
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
});

export const StyledButton = styled(Button)(() => ({
  margin: '20px auto',
}));
