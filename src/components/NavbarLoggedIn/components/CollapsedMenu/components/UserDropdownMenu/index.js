import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

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
        <StyledHeading4>
          Profile
        </StyledHeading4>
      </StyledNavLink>
      <StyledHeading4 onClick={handleClickLogout}>
        Logout
      </StyledHeading4>
    </Grid>
  );
}

export default withStyles(styles)(UserDropdownMenu);
