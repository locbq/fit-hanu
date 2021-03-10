import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {
  styles,
  StyledNavLink,
  StyledHeading4,
} from '../styles';
import { menuList } from './const';

function StudentsDropdownMenu({
  classes,
  handleClickShowMenu,
  ...props
}) {
  return (
    <Grid {...props}>
      {menuList.map((item) => (
        <StyledNavLink
          key={item.url}
          to={item.url}
          activeClassName={classes.active}
          onMouseUp={handleClickShowMenu}
        >
          <StyledHeading4>
            {item.title}
          </StyledHeading4>
        </StyledNavLink>
      ))}
    </Grid>
  );
}

export default withStyles(styles)(StudentsDropdownMenu);
