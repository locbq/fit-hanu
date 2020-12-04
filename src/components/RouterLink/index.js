import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondaryColor,
  transition: '0.25s ease-in-out',
  fontFamily: '"Open Sans", sans-serif',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.mainColor,
  },
}));

function RouterLink({
  children,
  ...props
}) {
  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
}

export default RouterLink;
