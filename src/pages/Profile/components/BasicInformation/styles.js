import {
  Grid,
  styled,
  TableCell,
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
}));

export const StyledButtonEdit = styled(Button)(() => ({
  margin: '20px 0px 0px auto',
}));
