import React from 'react';
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from '@material-ui/core/styles/styled';
import withStyles from '@material-ui/core/styles/withStyles';

const StyledCircularProgress = withStyles((theme) => ({
  svg: {
    color: theme.palette.white,
  },
}))(CircularProgress);

const StyledButton = styled(MuiButton)(({ theme }) => ({
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
  loading,
  ...props
}) {
  return (
    <StyledButton {...props}>
      {loading ? <StyledCircularProgress /> : children}
    </StyledButton>
  );
}

export default Button;
