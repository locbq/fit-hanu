import {
  Grid,
  styled,
  TableCell,
} from '@material-ui/core';

export const StyledImageAvatar = styled('img')(() => ({
  width: '100%',
}));

export const StyledGridInfo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '20px 0px 0px 0px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0px 20px',
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: `2px solid ${theme.palette.secondaryColor}`,
}));