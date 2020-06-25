import React from 'react';
import {
  Grid,
  Breadcrumbs,
  styled,
  withStyles,
  Container,
} from '@material-ui/core';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { Paragraph } from 'components/Headings';

const StyledGrid = styled(Grid)({
  margin: (props) => props.margin,
});

const StyledParagraphLast = withStyles((theme) => ({
  root: {
    color: (props) => props.textcolor,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}))(Paragraph);

const StyledParagraph = withStyles((theme) => ({
  root: {
    color: (props) => props.textcolor,
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },

}))(Paragraph);

const StyledLink = styled(Link)({
  color: (props) => props.textcolor,
  textDecoration: 'none',
  textTransform: 'capitalize',
  fontFamily: '"Montserrat", sans-serif',
  '&:hover': {
    color: '#FF6F00',
    transition: '0.25s ease-in-out',
  },
});

const StyledBreadcrumbs = withStyles({
  separator: {
    color: (props) => props.textcolor,
  },
})(Breadcrumbs);

const BreadCrumb = ({
  classes,
  margin = '60px 0px',
  ...props
}) => {
  const location = useLocation();
  let path = location.pathname;
  path = path.replace(/\/$/, '');
  const splitPath = path.split('/');

  return (
    <Container fixed>
      <StyledGrid
        margin={margin}
        {...props}
      >
        <StyledBreadcrumbs
          aria-label="breadcrumb"
          separator="|"
        >
          <StyledLink to="/">
            <StyledParagraph margin="0px">
              Home
            </StyledParagraph>
          </StyledLink>

          {splitPath.splice(1).map((breadcrumb, index) => {
            const pathname = path.split('/').splice(1);
            const last = index === pathname.length - 1;
            const to = `/${pathname.slice(0, index + 1).join('/')}`;
            const pageName = breadcrumb.replace(/[-]+/g, ' ');

            return last ? (
              <StyledParagraphLast key={to}>
                {pageName}
              </StyledParagraphLast>
            ) : (
              <StyledLink
                to={to}
                key={to}
              >
                <StyledParagraph>
                  {pageName}
                </StyledParagraph>
              </StyledLink>
            );
          })}
        </StyledBreadcrumbs>
      </StyledGrid>
    </Container>

  );
};

export default BreadCrumb;
