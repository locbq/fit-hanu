import React from 'react';
import {
  styled,
  Link as MuiLink,
} from '@material-ui/core';

const StyledLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.mainColor,
  transition: '0.25s ease-in-out',
  fontFamily: '"Open Sans", sans-serif',
  '&:hover': {
    color: theme.palette.secondaryColor,
  },
}));

function Link({
  children,
  ...props
}) {
  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
}

export default Link;
