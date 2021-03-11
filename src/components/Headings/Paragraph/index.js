import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from '@material-ui/core/styles/styled';

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.text,
  margin: '0px',
}));

function Paragraph({
  children,
  ...props
}) {
  return (
    <StyledTypo
      component="p"
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default Paragraph;
