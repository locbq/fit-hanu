import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import {
  styles,
  StyledGridMenuContainer,
  StyledGridMenu,
  StyledNavLink,
  StyledNavLinkDropdown,
  StyledHeading4,
} from './styles';
import {
  FacultyDropdownMenu,
  AdmissionDropdownMenu,
  ProgramsDropdownMenu,
  StudentsDropdownMenu,
  UserDropdownMenu,
} from './components';
import ConfirmModal from '../ConfirmModal';

function CollapsedMenu({
  classes,
  handleClickShowMenu,
  username,
  ...props
}) {
  const [showDropdownMenu, setShowDropdownMenu] = useState({
    faculty: false,
    admission: false,
    programs: false,
    students: false,
    user: false,
  });
  const [showConfirmModal, setConfirmModal] = useState(false);

  const handleClickShowFaculty = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: !showDropdownMenu.faculty,
      admission: false,
      programs: false,
      students: false,
      user: false,
    });
  };
  const handleClickShowAdmission = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: false,
      admission: !showDropdownMenu.admission,
      programs: false,
      students: false,
      user: false,
    });
  };
  const handleClickShowPrograms = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: false,
      admission: false,
      programs: !showDropdownMenu.programs,
      students: false,
      user: false,
    });
  };
  const handleClickShowStudents = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: false,
      admission: false,
      programs: false,
      students: !showDropdownMenu.students,
      user: false,
    });
  };
  const handleClickShowUser = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: false,
      admission: false,
      programs: false,
      students: false,
      user: !showDropdownMenu.user,
    });
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
      <StyledGridMenuContainer {...props}>
        <StyledGridMenu>
          <StyledNavLink
            exact
            to="/"
            activeClassName={classes.active}
            onMouseUp={handleClickShowMenu}
          >
            <StyledHeading4>Home</StyledHeading4>
          </StyledNavLink>

          <StyledHeading4 onClick={handleClickShowFaculty}>
            <StyledNavLinkDropdown
              to="/faculty-of-IT"
              activeClassName={classes.active}
            >
              Faculty Of IT
            </StyledNavLinkDropdown>
            <FontAwesomeIcon icon={faCaretDown} />
          </StyledHeading4>

          {showDropdownMenu.faculty ? <FacultyDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}

          <StyledHeading4 onClick={handleClickShowAdmission}>
            <StyledNavLinkDropdown
              to="/admission"
              activeClassName={classes.active}
            >
              Admission
            </StyledNavLinkDropdown>
            <FontAwesomeIcon icon={faCaretDown} />
          </StyledHeading4>

          {showDropdownMenu.admission ? <AdmissionDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}

          <StyledHeading4 onClick={handleClickShowPrograms}>
            <StyledNavLinkDropdown
              to="/graduation"
              activeClassName={classes.active}
            >
              Programs
            </StyledNavLinkDropdown>
            <FontAwesomeIcon icon={faCaretDown} />
          </StyledHeading4>

          {showDropdownMenu.programs ? <ProgramsDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}

          <StyledHeading4 onClick={handleClickShowStudents}>
            <StyledNavLinkDropdown
              to="/students"
              activeClassName={classes.active}
            >
              Students
            </StyledNavLinkDropdown>
            <FontAwesomeIcon icon={faCaretDown} />
          </StyledHeading4>

          {showDropdownMenu.students ? <StudentsDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}

          <StyledHeading4 onClick={handleClickShowUser}>
            {username}
            <FontAwesomeIcon icon={faCaretDown} />
          </StyledHeading4>

          {showDropdownMenu.user ? (
            <UserDropdownMenu
              handleClickShowMenu={handleClickShowMenu}
              handleClickLogout={handleClickLogout}
            />
          ) : null}
        </StyledGridMenu>
      </StyledGridMenuContainer>

      <ConfirmModal
        open={showConfirmModal}
        onConfirm={handleClickConfirmLogout}
        onCancel={handleClickCancelLogout}
      />
    </>
  );
}

export default withStyles(styles)(CollapsedMenu);
