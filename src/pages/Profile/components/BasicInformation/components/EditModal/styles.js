import {
  styled,
  Grid,
  OutlinedInput,
  DialogActions,
  withStyles,
} from '@material-ui/core';

import { Heading3 } from 'components/Headings';
import { Button } from 'components';

export const StyledButtonCancel = styled(Button)(({ theme }) => ({
  color: theme.palette.greyAA,
  background: theme.palette.greyEE,
  '&:hover': {
    background: theme.palette.greyCC,
    transition: '0.25s ease-in-out',
    color: theme.palette.greyAA,
  },
}));

export const StyledHeading3 = styled(Heading3)(() => ({
  margin: '24px 0px',
}));

export const StyledGridField = styled(Grid)(() => ({
  marginBottom: '20px',
}));

export const StyledInputDate = styled('input')(() => ({
  width: '100%',
  display: 'block',
}));

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  '& .Mui-disabled': {
    background: theme.palette.greyCC,
  },
}));

export const StyledDialogActions = withStyles(() => ({
  root: {
    padding: '20px',
  },
}))(DialogActions);

export const StyledGridHeading = styled(Grid)(({ theme }) => ({
  background: theme.palette.secondaryColor,
  padding: '20px',
  marginBottom: '20px',
  '& h2': {
    color: theme.palette.white,
  },
}));
