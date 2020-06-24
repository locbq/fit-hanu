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
  StyledNavBrand,
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
          <StyledNavBrand to="/">
            <span>FIT</span>
            {' '}
            HANU
          </StyledNavBrand>
          {navList.map((nav) => (
            <StyledGridHover>
              <StyledNavLink
                to={nav.url}
                activeClassName={classes.active}
              >
                {nav.navItem}
                {' '}
                <StyledFAIcon icon={faCaretDown} />
              </StyledNavLink>
              <StyledGridDropdown
                container
                direction="column"
              >
                {nav.dropdownList.map((dropdown) => (
                  <Link href="!#">
                    {dropdown}
                  </Link>
                ))}
              </StyledGridDropdown>
            </StyledGridHover>
          ))}
          <StyledNavLink
            to="/login"
            className={classes.loginNav}
            activeClassName={classes.active}
          >
            Login
          </StyledNavLink>
        </StyledGridNav>
      </StyledContainer>
    </StyledAppBar>
  );
}

export default withStyles(styles)(Navbar);
