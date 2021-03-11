import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Heading3 } from 'components/Headings';
import {
  styles,
  StyledGrid,
  StyledNavLink,
  StyledGridNav,
} from './styles';
import { profileNavbar } from './const';

function ProfileNavbar({ classes }) {
  return (
    <StyledGrid
      container
      alignItems="center"
    >
      {profileNavbar.map((nav) => (
        <StyledGridNav
          item
          lg={4}
          md={4}
        >
          <StyledNavLink
            to={nav.url}
            activeClassName={classes.active}
          >
            <Heading3>
              {nav.navItem}
            </Heading3>
          </StyledNavLink>
        </StyledGridNav>
      ))}
    </StyledGrid>
  );
}

export default withStyles(styles)(ProfileNavbar);
