import {
  styled,
  Grid,
  InputBase,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { 
  Heading2, 
  Paragraph 
} from 'components/Headings';

export const StyledGrid = styled(Grid)({
  width: '350px',
});

export const StyledHeading2 = styled(Heading2)({
  textAlign: 'center',
  margin: '0px 0px 30px 0px',
});

export const StyledInput = styled(InputBase)(({ theme }) => ({
  fontFamily: '"Open Sans", sans-serif',
  padding: '12px 14px',
  border: `2px solid ${theme.palette.borderInput}`,
}));

export const StyledGridField = styled(Grid)({
  marginBottom: '20px',
});

export const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: '"Open Sans", sans-serif',
  color: theme.palette.mainColor,
  textAlign: 'center',
  transition: '0.25s ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.secondaryColor,
  },
}));

export const StyledGridForgotLink = styled(Grid)({
  textAlign: 'center',
});

export const StyledParagraphErrorMessage = styled(Paragraph)(({ theme }) => ({
  color: theme.palette.dangerColor,
  margin: '10px 0px',
  textAlign: 'center',
}));

export const StyledParagraphLabel = styled(Paragraph)(() => ({
  margin: '0px 0px 5px 0px',
}));

export const styles = (theme) => ({
  inputError: {
    border: `${theme.palette.dangerColor} 2px solid`,
  },
});
