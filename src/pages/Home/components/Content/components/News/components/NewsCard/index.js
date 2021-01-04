import React from 'react';
import {
  Grid,
  styled,
  withStyles,
} from '@material-ui/core';
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

const styles = () => ({
  image: {
    width: '100%',
  },
});

function NewsCard({
  classes,
  children,
  title = '',
  image = '',
}) {
  return (
    <StyledGridCard>
      <StyledGridHeader container>
        <StyledFAIcon icon={faListUl} />
        <Heading4>{title}</Heading4>
      </StyledGridHeader>
      {image !== '' ? <img src={image} alt="pic" className={classes.image} /> : null}
      <StyledGridDescription>
        {children}
      </StyledGridDescription>
    </StyledGridCard>
  );
}

export default withStyles(styles)(NewsCard);
