import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

import { Heading3 } from 'components/Headings';

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
        lg={3}
        md={3}
        sm={6}
        xs={6}
      >
        <Heading3>
          {label}
          :
          {' '}
        </Heading3>
      </Grid>
      <Grid
        item
        lg={9}
        md={9}
        sm={6}
        xs={6}
      >
        <Heading3>{value}</Heading3>
      </Grid>
    </StyledGrid>
  );
}
