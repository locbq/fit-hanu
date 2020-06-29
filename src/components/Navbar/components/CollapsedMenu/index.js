import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import {
  StyledGridMenu,
  StyledNavLink,
  StyledHeading4,
} from './styles';

function CollapsedMenu({ ...props }) {
  return (
    <StyledGridMenu {...props}>
      <StyledNavLink to="/">
        <StyledHeading4>Home</StyledHeading4>
      </StyledNavLink>
      <StyledNavLink to="/">
        <StyledHeading4>
          Faculty Of IT
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>
      </StyledNavLink>
      <StyledNavLink to="/">
        <StyledHeading4>
          Admission
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>
      </StyledNavLink>
      <StyledNavLink to="/">
        <StyledHeading4>
          Programs
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>
      </StyledNavLink>
      <StyledNavLink to="/">
        <StyledHeading4>
          Students
          <FontAwesomeIcon icon={faCaretDown} />
        </StyledHeading4>
      </StyledNavLink>
    </StyledGridMenu>
  );
}

export default CollapsedMenu;
