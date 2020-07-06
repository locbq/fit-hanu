import {
  styled,
  Grid,
  InputBase,
  Button,
} from '@material-ui/core';

import { Paragraph } from 'components/Headings';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  background: '#ffffff',
  width: '50%',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  boxShadow: '0px 16px 36px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 30px)',
    boxShadow: 'none',
    background: 'none',
  },
}));

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
