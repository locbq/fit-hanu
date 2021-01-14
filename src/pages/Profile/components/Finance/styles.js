import React from 'react';
import { Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  chipColor: {
    color: (props) => props.color,
    borderColor: (props) => props.color,
  },
}));

export const StyledChip = ({ ...props }) => {
  const classes = useStyles(props);
  return (
    <Chip {...props} className={classes.chipColor} />
  );
};
