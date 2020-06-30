import {
  styled,
  Grid,
} from '@material-ui/core';

import fit10years from 'assets/img/login/fit-10y.jpg';

export const StyledGrid = styled(Grid)({
  height: 'calc(100vh - 60px)',
});

export const StyledGridBanner = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${fit10years})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledGridForm = styled(Grid)(({ theme }) => ({
  padding: '100px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 15px',
  },
}));
