import React from 'react';
import styled from '@material-ui/core/styles/styled';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Alert from '@material-ui/lab/Alert';

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
  customAlert: {
    display: (props) => (props.visible ? 'flex' : 'none'),
    marginBottom: '20px',
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

export const StyledAlert = ({
  children,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <Alert
      {...props}
      className={classes.customAlert}
    >
      {children}
    </Alert>
  );
};
