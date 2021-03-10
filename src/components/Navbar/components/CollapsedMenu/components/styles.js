import styled from '@material-ui/core/styles/styled';
import { NavLink } from 'react-router-dom';

import { Heading4 } from 'components/Headings';

export const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
});

export const StyledHeading4 = styled(Heading4)(({ theme }) => ({
  padding: '15px 15px 15px 30px',
  borderBottom: `1px solid ${theme.palette.greyA5}`,
  textTransform: 'uppercase',
  color: theme.palette.white,
}));

export const styles = (theme) => ({
  active: {
    '& h4': {
      color: theme.palette.mainColor,
    },
  },
});
