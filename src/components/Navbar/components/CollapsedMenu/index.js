import React from 'react';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import {
  styles,
  StyledGridMenu,
  StyledNavLink,
  StyledNavLinkDropdown,
  StyledHeading4,
} from './styles';
import {
  FacultyDropdownMenu,
  AdmissionDropdownMenu,
  ProgramsDropdownMenu,
} from './components';

function CollapsedMenu({
  classes,
  showFaculty,
  showAdmisson,
  showPrograms,
  setShowFaculty,
  setShowAdmission,
  setShowPrograms,
  handleClickShowMenu,
  ...props
}) {
  const handleClickShowFaculty = (event) => {
    event.preventDefault();
    setShowFaculty(!showFaculty);
  };

  const handleClickShowAdmission = (event) => {
    event.preventDefault();
    setShowAdmission(!showAdmisson);
  };
  const handleClickShowPrograms = (event) => {
    event.preventDefault();
    setShowPrograms(!showPrograms);
  };

  return (
    <StyledGridMenu {...props}>
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

      <StyledNavLink
        to="/students"
        activeClassName={classes.active}
      >
        <StyledHeading4>
          Students
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>
      </StyledNavLink>
    </StyledGridMenu>
  );
}

export default withStyles(styles)(CollapsedMenu);
