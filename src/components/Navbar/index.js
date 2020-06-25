import React from 'react';
import { withStyles } from '@material-ui/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

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
            <StyledGridHover key={nav.title}>
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
                  <NavLink
                    key={dropdown.title}
                    to={`${nav.url}${dropdown.url}`}
                    activeClassName={classes.activeDropdown}
                  >
                    {dropdown.title}
                  </NavLink>
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
