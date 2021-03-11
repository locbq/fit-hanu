import React from 'react';
import styled from '@material-ui/core/styles/styled';

import { Paragraph } from 'components/Headings';

const StyledParagraph = styled(Paragraph)(({ theme }) => ({
  color: theme.palette.dangerColor,
}));

function ErrorMessage({
  text = '',
}) {
  return (
    <StyledParagraph>
      {text}
    </StyledParagraph>
  );
}

export default ErrorMessage;
