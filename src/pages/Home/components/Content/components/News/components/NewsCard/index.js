import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@material-ui/core/styles/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import { Heading4 } from 'components/Headings';

const StyledGridCard = styled(Grid)(({ theme }) => ({
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  background: theme.palette.white,
  marginBottom: '30px',
  '& a': {
    color: theme.palette.mainColor,
    display: 'inline-block',
    margin: '5px 0px',
  },
}));

const StyledGridHeader = styled(Grid)(({ theme }) => ({
  background: theme.palette.secondaryColor,
  padding: '20px',
}));

const StyledFAIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  fontSize: '18px',
  marginRight: '10px',
  color: theme.palette.mainColor,
}));

const StyledGridDescription = styled(Grid)({
  padding: '20px',
});

const StyledHeading4 = styled(Heading4)(({ theme }) => ({
  color: theme.palette.white,
  textTransform: 'uppercase',
}));

const StyledImage = styled('img')(() => ({
  width: '100%',
}));

function NewsCard({
  children,
  title = '',
  image = '',
}) {
  return (
    <StyledGridCard>
      <StyledGridHeader container>
        <StyledFAIcon icon={faListUl} />
        <StyledHeading4>{title}</StyledHeading4>
      </StyledGridHeader>
      {image !== '' ? <StyledImage src={image} alt="pic" /> : null}
      <StyledGridDescription>
        {children}
      </StyledGridDescription>
    </StyledGridCard>
  );
}

export default NewsCard;
