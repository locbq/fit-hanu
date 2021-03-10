import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from '@material-ui/core/styles/styled';

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.heading,
  margin: '0px',
}));

function Heading3({
  children,
  ...props
}) {
  return (
    <StyledTypo
      component="h3"
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default Heading3;
