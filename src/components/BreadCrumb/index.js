import React from 'react';
import {
  Grid,
  Breadcrumbs,
  styled,
  withStyles,
  Container,
} from '@material-ui/core';
import { useLocation } from 'react-router';

import { Paragraph } from 'components/Headings';
import RouterLink from '../RouterLink';

const StyledGrid = styled(Grid)(() => ({
  margin: '30px 0px',
}));

const StyledParagraphLast = withStyles((theme) => ({
  root: {
    color: theme.palette.mainColor,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
}))(Paragraph);

const StyledParagraph = withStyles((theme) => ({
  root: {
    color: theme.palette.paragraphColor,
  },
}))(Paragraph);

const StyledLink = styled(RouterLink)(() => ({
  textTransform: 'capitalize',
}));

const StyledBreadcrumbs = withStyles({
  separator: {
    color: (props) => props.textcolor,
  },
})(Breadcrumbs);

const BreadCrumb = ({ classes, ...props }) => {
  const location = useLocation();
  let path = location.pathname;
  path = path.replace(/\/$/, '');
  const splitPath = path.split('/');

  return (
    <Container fixed>
      <StyledGrid {...props}>
        <StyledBreadcrumbs aria-label="breadcrumb" separator="|">
          <StyledLink to="/">
            <StyledParagraph margin="0px">Home</StyledParagraph>
          </StyledLink>

          {splitPath.splice(1).map((breadcrumb, index) => {
            const pathname = path.split('/').splice(1);
            const last = index === pathname.length - 1;
            const to = `/${pathname.slice(0, index + 1).join('/')}`;
            const pageName = breadcrumb.replace(/[-]+/g, ' ');

            return last ? (
              <StyledParagraphLast key={to}>{pageName}</StyledParagraphLast>
            ) : (
              <StyledLink to={to} key={to}>
                <StyledParagraph>{pageName}</StyledParagraph>
              </StyledLink>
            );
          })}
        </StyledBreadcrumbs>
      </StyledGrid>
    </Container>
  );
};

export default BreadCrumb;
