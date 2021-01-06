/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  withStyles,
  Grid,
} from '@material-ui/core';

import {
  styles,
  StyledNavLink,
  StyledHeading4,
} from '../styles';

function UserDropdownMenu({
  classes,
  handleClickShowMenu,
  handleClickLogout,
  ...props
}) {
  return (
    <Grid {...props}>
      <StyledNavLink
        to="/profile"
        activeClassName={classes.active}
        onMouseUp={handleClickShowMenu}
      >
        <StyledHeading4
          color="#ffffff"
        >
          Profile
        </StyledHeading4>
      </StyledNavLink>
      <StyledHeading4
        color="#ffffff"
        onClick={handleClickLogout}
      >
        Logout
      </StyledHeading4>
    </Grid>
  );
}

export default withStyles(styles)(UserDropdownMenu);
