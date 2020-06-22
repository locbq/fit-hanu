import {
  styled,
  Grid,
} from '@material-ui/core';

import fit10years from 'assets/img/login/fit-10y.jpg';

export const StyledGrid = styled(Grid)({
  height: 'calc(100vh - 60px)',
});

export const StyledGridBanner = styled(Grid)({
  backgroundImage: `url(${fit10years})`,
  backgroundSize: 'cover',
  height: '100%',
});
