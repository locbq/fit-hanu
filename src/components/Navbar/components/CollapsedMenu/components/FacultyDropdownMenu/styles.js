import {
  styled,
  Grid,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { Heading4 } from 'components/Headings';

export const StyledGridMenu = styled(Grid)({

});

export const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
});

export const StyledHeading4 = styled(Heading4)({
  padding: '15px 15px 15px 30px',
  borderBottom: '1px solid rgba(196,196,196, 0.2)',
  textTransform: 'uppercase',
});

export const styles = () => ({
  active: {
    '& h4': {
      color: '#fd8b4b',
    },
  },
});
