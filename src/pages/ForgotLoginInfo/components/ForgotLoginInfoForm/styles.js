import {
  styled,
  InputBase,
  Button,
} from '@material-ui/core';

import {
  Heading4,
  Paragraph,
} from 'components/Headings';

export const StyledHeading4 = styled(Heading4)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '20px 0px 10px 0px',
});

export const StyledParagraph = styled(Paragraph)(({ theme }) => ({
  fontStyle: 'italic',
  borderBottom: `1px solid ${theme.palette.mainColor}`,
  paddingBottom: '20px',
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  fontFamily: '"Open Sans", sans-serif',
  padding: '12px 14px',
  border: `2px solid ${theme.palette.greyCC}`,
  marginRight: '20px',
}));

export const StyledButtonSearch = styled(Button)(({ theme }) => ({
  background: theme.palette.mainColor,
  color: theme.palette.white,
  fontWeight: 'bold',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '16px',
  borderRadius: '0px',
  transition: '0.25s ease-in-out',
  '&:hover': {
    background: theme.palette.secondaryColor,
  },
}));

export const styles = (theme) => ({
  inputError: {
    border: `2px solid ${theme.palette.dangerColor}`,
  },
});
