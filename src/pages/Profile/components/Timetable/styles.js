import React from 'react';
import styled from '@material-ui/core/styles/styled';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  cellBg: {
    background: (props) => props.background,
    textAlign: 'center',
    '& h3': {
      color: theme.palette.white,
    },
  },
}));

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  background: theme.palette.secondaryColor,
  textAlign: 'center',
  '& h3': {
    color: theme.palette.mainColor,
  },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    overflowX: 'scroll',
  },
}));

export const StyledLabelCell = ({
  children,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <TableCell
      className={classes.cellBg}
      {...props}
    >
      {children}
    </TableCell>
  );
};

export const StyledGridLabelContainer = styled(Grid)(({ theme }) => ({
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '0px',
  },
}));
