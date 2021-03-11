import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Heading2 } from 'components/Headings';
import {
  styles,
  StyledGridHeader,
  StyledGrid,
  Divider,
  StyledNavLink,
  StyledList,
  StyledListItem,
} from './styles';

function TableOfContents({
  classes,
  links = [],
}) {
  return (
    <StyledGrid>
      <StyledGridHeader>
        <Heading2 margin="0px 0px 15px 0px">Table Of Contents</Heading2>
        <Divider />
      </StyledGridHeader>

      <StyledList component="ol">
        {links.map((link) => (
          <StyledListItem>
            <StyledNavLink
              activeClassName={classes.active}
              to={link.url}
            >
              {link.title}
            </StyledNavLink>
          </StyledListItem>
        ))}
      </StyledList>

    </StyledGrid>
  );
}

export default withStyles(styles)(TableOfContents);
