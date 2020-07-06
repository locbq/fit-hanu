import {
  styled,
  Grid,
  InputBase,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Heading2 } from 'components/Headings';

export const StyledGrid = styled(Grid)({
  width: '350px',
});

export const StyledHeading2 = styled(Heading2)({
  textAlign: 'center',
});

export const StyledInput = styled(InputBase)({
  fontFamily: '"Open Sans", sans-serif',
  padding: '12px 14px',
  border: '2px solid #cccccc',
});

export const StyledGridField = styled(Grid)({
  marginBottom: '20px',
});

export const StyledLink = styled(Link)({
  fontFamily: '"Open Sans", sans-serif',
  color: '#fd8b4b',
  textAlign: 'center',
  transition: '0.25s ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    color: '#231d1f',
  },
});

export const StyledGridForgotLink = styled(Grid)({
  textAlign: 'center',
});
