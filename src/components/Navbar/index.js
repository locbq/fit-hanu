import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  faCaretDown,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import navList from './const';
import {
  styles,
  StyledAppBar,
  StyledContainer,
  StyledGridNav,
  StyledNavBrand,
  StyledGridNavLinks,
  StyledNavLink,
  StyledNavLinkLogin,
  StyledFAIcon,
  StyledGridHover,
  StyledGridDropdown,
  StyledButtonCollapsedMenu,
} from './styles';
import CollapsedMenu from './components/CollapsedMenu';

function Navbar({ classes }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickShowMenu = (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };

  const handleClickCloseMenu = (event) => {
    event.preventDefault();
    setShowMenu(false);
  };

  return (
    <>
      {showMenu ? (
        <CollapsedMenu handleClickShowMenu={handleClickShowMenu} />
      ) : null}
      <StyledAppBar>
        <StyledContainer fixed>
          <StyledGridNav container>
            <StyledNavBrand
              to="/"
              onMouseUp={handleClickCloseMenu}
            >
              <span>FIT</span>
              {' '}
              HANU
            </StyledNavBrand>
            <StyledGridNavLinks>
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
            </StyledGridNavLinks>
            <StyledNavLinkLogin
              to="/login"
              className={classes.loginNav}
              activeClassName={classes.active}
            >
              Login
            </StyledNavLinkLogin>
            <StyledButtonCollapsedMenu onClick={handleClickShowMenu}>
              <FontAwesomeIcon icon={faBars} />
            </StyledButtonCollapsedMenu>
          </StyledGridNav>
        </StyledContainer>
      </StyledAppBar>
    </>
  );
}

export default withStyles(styles)(Navbar);
