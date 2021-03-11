import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@material-ui/core/styles/styled';

import { Paragraph } from 'components/Headings';

const StyledGrid = styled(Grid)(() => ({
  marginBottom: '20px',
}));

export default function Field({
  currency = false,
  label = '',
  value = '',
}) {
  return (
    <StyledGrid container>
      <Grid
        item
        lg={9}
        md={9}
        sm={8}
        xs={8}
      >
        <Paragraph>
          {label}
          :
          {' '}
        </Paragraph>
      </Grid>
      <Grid
        item
        lg={3}
        md={3}
        sm={4}
        xs={4}
      >
        <Paragraph>{currency ? `${value} VND` : value}</Paragraph>
      </Grid>
    </StyledGrid>
  );
}
