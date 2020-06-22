import React from 'react';
import {
  Typography,
  styled,
} from '@material-ui/core';

const StyledTypo = styled(Typography)({
  fontFamily: '"Montserrat", sans-serif',
  textTransform: (props) => props.transform,
  margin: (props) => props.margin,
  color: (props) => props.color,
});

function Heading4({
  children,
  transform = '',
  margin = '0px',
  color = '',
  ...props
}) {
  return (
    <StyledTypo
      component="h4"
      margin={margin}
      color={color}
      transform={transform}
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default Heading4;