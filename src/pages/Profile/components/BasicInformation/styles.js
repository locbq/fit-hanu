import {
  CircularProgress,
  Grid,
  styled,
  TableCell,
  withStyles,
} from '@material-ui/core';

import { Button } from 'components';

export const StyledImageAvatar = styled('img')(() => ({
  width: '100%',
  marginBottom: ' 20px',
}));

export const StyledGridInfo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: '20px 0px 0px 0px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0px 20px',
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: `2px solid ${theme.palette.secondaryColor}`,
  width: '50%',
}));

export const StyledButtonEdit = styled(Button)(() => ({
  margin: '20px 0px 0px auto',
}));

export const StyledButtonAvatar = styled(Button)(() => ({
  width: 'auto',
}));

export const StyledCircularProgress = withStyles((theme) => ({
  svg: {
    color: theme.palette.mainColor,
  },
}))(CircularProgress);

export const StyledGridSpinner = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    height: '298px',
  },
  [theme.breakpoints.up('md')]: {
    height: '218px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '512px',
  },
  [theme.breakpoints.up('xs')]: {
    height: '303px',
  },
}));
