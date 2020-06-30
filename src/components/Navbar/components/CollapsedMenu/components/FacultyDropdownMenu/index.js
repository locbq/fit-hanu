/* eslint-disable react/no-array-index-key */
import React from 'react';
import { withStyles } from '@material-ui/core';

import {
  styles,
  StyledGridMenu,
  StyledNavLink,
  StyledHeading4,
} from './styles';
import { menuList } from './const';

function FacultyDropdownMenu({
  classes,
  handleClickShowMenu,
  ...props
}) {
  return (
    <StyledGridMenu {...props}>
      {menuList.map((item, index) => (
        <StyledNavLink
          key={index}
          to={item.url}
          activeClassName={classes.active}
          onMouseUp={handleClickShowMenu}
        >
          <StyledHeading4
            color="#ffffff"
          >
            {item.title}
          </StyledHeading4>
        </StyledNavLink>
      ))}
    </StyledGridMenu>
  );
}

export default withStyles(styles)(FacultyDropdownMenu);
