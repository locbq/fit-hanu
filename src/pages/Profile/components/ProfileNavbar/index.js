import React from 'react';
import { withStyles } from '@material-ui/core';

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
      justify="space-around"
      alignItems="center"
    >
      {profileNavbar.map((nav) => (
        <StyledGridNav
          item
          lg={3}
          md={3}
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
