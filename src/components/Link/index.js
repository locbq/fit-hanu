import React from 'react';
import styled from '@material-ui/core/styles/styled';
import MuiLink from '@material-ui/core/Link';

const StyledLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.mainColor,
  transition: '0.25s ease-in-out',
  fontFamily: theme.typography.fontFamily.text,
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
