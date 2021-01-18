import React from 'react';
import {
  Button as MuiButton,
  CircularProgress,
  styled, withStyles,
} from '@material-ui/core';

const StyledCircularProgress = withStyles((theme) => ({
  svg: {
    color: theme.palette.white,
  },
}))(CircularProgress);

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
    background: theme.palette.greyAA,
  },
}));

function Button({
  children,
  margin = '',
  loading,
  ...props
}) {
  return (
    <StyledButton
      margin={margin}
      {...props}
    >
      {loading ? <StyledCircularProgress/> : children}
    </StyledButton>
  );
}

export default Button;
