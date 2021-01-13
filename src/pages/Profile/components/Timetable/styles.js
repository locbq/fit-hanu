import {
  styled,
  TableCell,
  Grid,
} from '@material-ui/core';

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  background: theme.palette.secondaryColor,
  '& h3': {
    color: theme.palette.mainColor,
  },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    overflowX: 'scroll',
  },
}));
