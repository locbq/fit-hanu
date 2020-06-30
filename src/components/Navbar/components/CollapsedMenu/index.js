import React from 'react';
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
  showFaculty,
  showAdmisson,
  showPrograms,
  showStudents,
  setShowFaculty,
  setShowAdmission,
  setShowPrograms,
  setShowStudents,
  handleClickShowMenu,
  ...props
}) {
  const handleClickShowFaculty = (event) => {
    event.preventDefault();
    setShowFaculty(!showFaculty);
    setShowAdmission(false);
    setShowPrograms(false);
    setShowStudents(false);
  };

  const handleClickShowAdmission = (event) => {
    event.preventDefault();
    setShowAdmission(!showAdmisson);
    setShowFaculty(false);
    setShowPrograms(false);
    setShowStudents(false);
  };
  const handleClickShowPrograms = (event) => {
    event.preventDefault();
    setShowPrograms(!showPrograms);
    setShowFaculty(false);
    setShowAdmission(false);
    setShowStudents(false);
  };
  const handleClickShowStudents = (event) => {
    event.preventDefault();
    setShowStudents(!showStudents);
    setShowFaculty(false);
    setShowAdmission(false);
    setShowPrograms(false);
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

        {showFaculty ? <FacultyDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}

        <StyledHeading4 onClick={handleClickShowAdmission}>
          <StyledNavLinkDropdown
            to="/admission"
            activeClassName={classes.active}
          >
            Admission
          </StyledNavLinkDropdown>
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>

        {showAdmisson ? <AdmissionDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}

        <StyledHeading4 onClick={handleClickShowPrograms}>
          <StyledNavLinkDropdown
            to="/graduation"
            activeClassName={classes.active}
          >
            Programs
          </StyledNavLinkDropdown>
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>

        {showPrograms ? <ProgramsDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}

        <StyledHeading4 onClick={handleClickShowStudents}>
          <StyledNavLinkDropdown
            to="/students"
            activeClassName={classes.active}
          >
            Students
          </StyledNavLinkDropdown>
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>

        {showStudents ? <StudentsDropdownMenu handleClickShowMenu={handleClickShowMenu} /> : null}
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
