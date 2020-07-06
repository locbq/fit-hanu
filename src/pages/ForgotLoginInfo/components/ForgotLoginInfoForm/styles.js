import {
  styled,
  InputBase,
  Button,
} from '@material-ui/core';

import { Paragraph } from 'components/Headings';

export const StyledParagraph = styled(Paragraph)({
  fontStyle: 'italic',
  borderBottom: '1px solid #fd8b4b',
  paddingBottom: '20px',
});

export const StyledInput = styled(InputBase)({
  fontFamily: '"Open Sans", sans-serif',
  padding: '12px 14px',
  border: '2px solid #cccccc',
  marginRight: '20px',
});

export const StyledButtonSearch = styled(Button)({
  background: '#fd8b4b',
  color: '#ffffff',
  fontWeight: 'bold',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '16px',
  borderRadius: '0px',
  transition: '0.25s ease-in-out',
  '&:hover': {
    background: '#231d1f',
  },
});
