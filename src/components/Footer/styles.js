import { styled } from '@material-ui/core';

import { Paragraph } from 'components/Headings';

export const StyledFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.secondaryColor,
  textAlign: 'center',
}));

export const StyledParagraph = styled(Paragraph)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.white,
}));
