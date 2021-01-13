import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

import { Paragraph } from 'components/Headings';

const StyledGrid = styled(Grid)(() => ({
  marginBottom: '20px',
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
        sm={10}
        xs={10}
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
        sm={2}
        xs={2}
      >
        <Paragraph>{value}</Paragraph>
      </Grid>
    </StyledGrid>
  );
}
