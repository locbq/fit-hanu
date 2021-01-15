import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

import { Paragraph } from 'components/Headings';

const StyledGrid = styled(Grid)(() => ({
  marginBottom: '20px',
}));

const StyledParagraph = styled(Paragraph)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '250px',
  },
}));

export default function Field({
  label = '',
  value = '',
}) {
  return (
    <StyledGrid container>
      <Grid
        item
        lg={9}
        md={9}
        sm={11}
        xs={11}
      >
        <StyledParagraph>
          {label}
          :
          {' '}
        </StyledParagraph>
      </Grid>
      <Grid
        item
        lg={3}
        md={3}
        sm={1}
        xs={1}
      >
        <Paragraph>{value}</Paragraph>
      </Grid>
    </StyledGrid>
  );
}
