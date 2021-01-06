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
} from './components';

function CollapsedMenu({
  classes,
  handleClickShowMenu,
  ...props
}) {
  const [showDropdownMenu, setShowDropdownMenu] = useState({
    faculty: false,
    admission: false,
    programs: false,
    students: false,
    user: false,
  });

  const handleClickShowFaculty = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: !showDropdownMenu.faculty,
      admission: false,
      programs: false,
      students: false,
    });
  };
  const handleClickShowAdmission = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: false,
      admission: !showDropdownMenu.admission,
      programs: false,
      students: false,
    });
  };
  const handleClickShowPrograms = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: false,
      admission: false,
      programs: !showDropdownMenu.programs,
      students: false,
    });
  };
  const handleClickShowStudents = (event) => {
    event.preventDefault();
    setShowDropdownMenu({
      faculty: false,
      admission: false,
      programs: false,
      students: !showDropdownMenu.students,
    });
  };

  return (
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
        <StyledNavLink
          exact
          to="/login"
          activeClassName={classes.active}
          onMouseUp={handleClickShowMenu}
        >
          <StyledHeading4>Login</StyledHeading4>
        </StyledNavLink>

      </StyledGridMenu>
    </StyledGridMenuContainer>
  );
}

export default withStyles(styles)(CollapsedMenu);
