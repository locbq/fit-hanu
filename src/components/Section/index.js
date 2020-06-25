import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

const StyledGrid = styled(Grid)({
  padding: (props) => props.padding,
  backgroundColor: (props) => props.backgroundcolor,
});

function Section({
  children,
  padding = '60px 0px',
  backgroundcolor = '',
  ...props
}) {
  return (
    <StyledGrid
      padding={padding}
      backgroundcolor={backgroundcolor}
      {...props}
    >
      {children}
    </StyledGrid>
  );
}

export default Section;
