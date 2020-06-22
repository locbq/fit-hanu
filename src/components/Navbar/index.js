/* eslint-disable no-undefined */
import React from 'react';
import {
  Link,
  withStyles,
} from '@material-ui/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import navList from './const';
import {
  styles,
  StyledAppBar,
  StyledContainer,
  StyledGridNav,
  StyledNavLink,
  StyledFAIcon,
  StyledGridHover,
  StyledGridDropdown,
} from './styles';

function Navbar({ classes }) {
  return (
    <StyledAppBar>
      <StyledContainer fixed>
        <StyledGridNav container>
          {navList.map((nav) => (
            <StyledGridHover>
              <StyledNavLink to={nav.url}>
                {nav.navItem}
                {' '}
                <StyledFAIcon icon={faCaretDown} />
              </StyledNavLink>
              <StyledGridDropdown container direction="column">
                {nav.dropdownList.map((dropdown) => (
                  <Link href="!#">
                    {dropdown}
                  </Link>
                ))}
              </StyledGridDropdown>
            </StyledGridHover>
          ))}
          <StyledNavLink to="/login" className={classes.loginNav}>
            Đăng nhập
          </StyledNavLink>
        </StyledGridNav>
      </StyledContainer>
    </StyledAppBar>
  );
}

export default withStyles(styles)(Navbar);
