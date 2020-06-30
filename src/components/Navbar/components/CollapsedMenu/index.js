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
import { AdmissionDropdownMenu } from './components';

function CollapsedMenu({
  classes,
  showAdmisson,
  setShowAdmission,
  handleClickShowMenu,
  ...props
}) {
  const handleClickShowAdmission = (event) => {
    event.preventDefault();
    setShowAdmission(!showAdmisson);
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

      <StyledHeading4>
        <StyledNavLinkDropdown
          to="/faculty-of-IT"
          activeClassName={classes.active}
          onMouseUp={handleClickShowMenu}
        >
          Faculty Of IT
        </StyledNavLinkDropdown>
        <FontAwesomeIcon icon={faCaretDown} />
      </StyledHeading4>

      <StyledHeading4 onClick={handleClickShowAdmission}>
        <StyledNavLinkDropdown
          to="/admission"
          activeClassName={classes.active}
        >
          Admission
        </StyledNavLinkDropdown>
        <FontAwesomeIcon icon={faCaretDown} />
      </StyledHeading4>

      {showAdmisson ? (<AdmissionDropdownMenu handleClickShowMenu={handleClickShowMenu} />) : null}

      <StyledNavLink
        to="/programs"
        activeClassName={classes.active}
      >
        <StyledHeading4>
          Programs
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>
      </StyledNavLink>
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
