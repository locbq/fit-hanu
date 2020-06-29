import React from 'react';

import {
  StyledGridMenu,
  StyledNavLink,
  StyledHeading3,
} from './styles';

function CollapsedMenu({ ...props }) {
  return (
    <StyledGridMenu {...props}>
      <StyledNavLink to="/">
        <StyledHeading3 margin="15px">
          Home
        </StyledHeading3>
      </StyledNavLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/">Home</StyledNavLink>
    </StyledGridMenu>
  );
}

export default CollapsedMenu;
