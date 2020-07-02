import React from 'react';
import { Grid, styled, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

const StyledGridCard = styled(Grid)({
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  background: '#ffffff',
  marginBottom: '30px',
  '& a': {
    color: '#fd8b4b',
    display: 'inline-block',
    margin: '5px 0px',
  },
});

const StyledGridHeader = styled(Grid)({
  background: '#231d1f',
  padding: '20px',
  '& > h4': {
    margin: '0px',
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
  },
});

const StyledFAIcon = styled(FontAwesomeIcon)({
  fontSize: '18px',
  marginRight: '10px',
  color: '#fd8b4b',
});

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
        <h4>{title}</h4>
      </StyledGridHeader>
      {image !== '' ? <img src={image} alt="pic" className={classes.image} /> : null}
      <StyledGridDescription>
        {children}
      </StyledGridDescription>
    </StyledGridCard>
  );
}

export default withStyles(styles)(NewsCard);
