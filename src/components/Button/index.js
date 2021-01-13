import React from 'react';
import {
  Button as MuiButton,
  styled,
} from '@material-ui/core';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  margin: (props) => props.margin,
  display: 'flex',
  width: '140px',
  height: '45px',
  background: theme.palette.mainColor,
  color: theme.palette.white,
  fontWeight: 'bold',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '16px',
  borderRadius: '0px',
  '&:hover': {
    background: theme.palette.secondaryColor,
    transition: '0.25s ease-in-out',
  },
  '&.Mui-disabled': {
    background: theme.palette.greyAAA,
  },
}));

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
