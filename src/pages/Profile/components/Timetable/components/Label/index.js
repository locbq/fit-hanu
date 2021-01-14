import React from 'react';

import {
  styled,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { Heading4 } from 'components/Headings';

const useStyles = makeStyles(() => ({
  labelColor: {
    background: (props) => props.background,
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginRight: '15px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '10px',
  },
}));

const StyledGridColor = styled(Grid)(() => ({
  width: '20px',
  height: '20px',
  marginRight: '10px',
}));

function Label({
  title = '',
  ...props
}) {
  const classes = useStyles(props);
  return (
    <StyledGrid
      container
      item
      lg={4}
      md={4}
      sm={12}
      xs={12}
      {...props}
    >
      <StyledGridColor className={classes.labelColor} />
      <Heading4>{title}</Heading4>
    </StyledGrid>
  );
}

export default Label;
