import React from 'react';
import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';

const StyledGrid = styled(Grid)({
  padding: '60px 0px',
});

function Section({
  children,
  ...props
}) {
  return (
    <StyledGrid
      {...props}
    >
      {children}
    </StyledGrid>
  );
}

export default Section;
