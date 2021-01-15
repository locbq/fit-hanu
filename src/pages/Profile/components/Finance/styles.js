import React from 'react';
import {
  styled,
  Chip,
  makeStyles,
} from '@material-ui/core';

import { Heading2 } from 'components/Headings';

const useStyles = makeStyles(() => ({
  chipColor: {
    color: (props) => props.color,
    borderColor: (props) => props.color,
    '& svg': {
      color: (props) => props.color,
      paddingLeft: '5px',
    },
    marginLeft: '10px',
  },
}));

export const StyledChip = ({ ...props }) => {
  const classes = useStyles(props);
  return (
    <Chip
      {...props}
      className={classes.chipColor}
    />
  );
};

export const StyledHeading2 = styled(Heading2)(() => ({
  marginBottom: '20px',
}));
