import { styled } from '@material-ui/core';

import { Paragraph } from 'components/Headings';

export const StyledFooter = styled('footer')({
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  background: '#231d1f',
  textAlign: 'center',
});

export const StyledParagraph = styled(Paragraph)({
  fontWeight: 'bold',
});
