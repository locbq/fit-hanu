import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

import fit10years from 'assets/img/login/fit-10y.jpg';

const StyledGridBanner = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${fit10years})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

function Banner() {
  return (
    <StyledGridBanner
      item
      lg={7}
      md={7}
      sm={12}
      xs={12}
    />
  );
}

export default Banner;
