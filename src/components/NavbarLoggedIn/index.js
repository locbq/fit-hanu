import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import {
  faCaretDown,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Paragraph } from 'components/Headings';
import navList from './const';
import {
  styles,
  StyledAppBar,
  StyledContainer,
  StyledGridNav,
  StyledNavBrand,
  StyledGridNavLinks,
  StyledNavLink,
  StyledParagraph,
  StyledFAIcon,
  StyledGridHover,
  StyledGridDropdown,
  StyledButtonCollapsedMenu,
  StyledGridHoverUser,
} from './styles';
import CollapsedMenu from './components/CollapsedMenu';
import ConfirmModal from './components/ConfirmModal';

function Navbar({ classes, username }) {
  const [showMenu, setShowMenu] = useState(false);

  const [showFaculty, setShowFaculty] = useState(false);
  const [showAdmisson, setShowAdmission] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showStudents, setShowStudents] = useState(false);
  const [showConfirmModal, setConfirmModal] = useState(false);

  const handleClickShowMenu = (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };
  const handleClickCloseMenu = (event) => {
    event.preventDefault();
    setShowMenu(false);
  };
  const handleClickLogout = (event) => {
    event.preventDefault();
    setConfirmModal(true);
  };
  const handleClickCancelLogout = () => {
    setConfirmModal(false);
  };
  const handleClickConfirmLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
    setConfirmModal(false);
  };

  return (
    <>
      {showMenu ? (
        <CollapsedMenu
          showFaculty={showFaculty}
          showAdmisson={showAdmisson}
          showPrograms={showPrograms}
          showStudents={showStudents}
          setShowFaculty={setShowFaculty}
          setShowAdmission={setShowAdmission}
          setShowPrograms={setShowPrograms}
          setShowStudents={setShowStudents}
          handleClickShowMenu={handleClickShowMenu}
        />
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
            <StyledGridHoverUser className={classes.loginNav}>
              <StyledParagraph>{username}</StyledParagraph>
              <StyledGridDropdown
                container
                direction="column"
              >
                <NavLink to="/">Profile</NavLink>
                <Paragraph onClick={handleClickLogout}>Logout</Paragraph>
              </StyledGridDropdown>
            </StyledGridHoverUser>
            <StyledButtonCollapsedMenu onClick={handleClickShowMenu}>
              <FontAwesomeIcon icon={faBars} />
            </StyledButtonCollapsedMenu>
          </StyledGridNav>
        </StyledContainer>
      </StyledAppBar>

      <ConfirmModal
        open={showConfirmModal}
        onConfirm={handleClickConfirmLogout}
        onCancel={handleClickCancelLogout}
      />
    </>
  );
}

export default withStyles(styles)(Navbar);
