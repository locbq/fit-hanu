import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

const StyledGrid = styled(Grid)({
  padding: (props) => props.padding,
});

function Section({
  children,
  padding = '60px 0px',
  ...props
}) {
  return (
    <StyledGrid
      padding={padding}
      {...props}
    >
      {children}
    </StyledGrid>
  );
}

export default Section;
