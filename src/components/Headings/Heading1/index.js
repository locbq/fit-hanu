import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from '@material-ui/core/styles/styled';

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.heading,
  margin: '0px',
}));

function Heading1({
  children,
  ...props
}) {
  return (
    <StyledTypo
      component="h1"
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default Heading1;
