import React from 'react';
import {
  Button as MuiButton,
  styled,
} from '@material-ui/core';

const StyledButton = styled(MuiButton)({
  margin: (props) => props.margin,
  display: 'block',
  width: '140px',
  height: '45px',
  background: '#fd8b4b',
  color: '#ffffff',
  fontWeight: 'bold',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '16px',
  borderRadius: '0px',
  '&:hover': {
    background: '#231d1f',
    transition: '0.25s ease-in-out',
  },
});

function Button({
  children,
  margin = '',
  ...props
}) {
  return (
    <StyledButton
      margin={margin}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
