import React from 'react';
import { Typography, styled } from '@material-ui/core';

const StyledTypo = styled(Typography)({
  fontFamily: '"Open Sans", sans-serif',
  margin: (props) => props.margin,
  color: (props) => props.color,
  textAlign: (props) => props.align,
});

function Paragraph({
  children,
  align = '',
  margin = '0px',
  color = '',
  ...props
}) {
  return (
    <StyledTypo
      component="p"
      margin={margin}
      color={color}
      align={align}
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default Paragraph;
