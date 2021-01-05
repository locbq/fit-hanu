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
import { menuList } from './const';

function AdmissionDropdownMenu({
  classes,
  handleClickShowMenu,
  ...props
}) {
  return (
    <Grid {...props}>
      {menuList.map((item, index) => (
        <StyledNavLink
          key={index}
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

export default withStyles(styles)(AdmissionDropdownMenu);
