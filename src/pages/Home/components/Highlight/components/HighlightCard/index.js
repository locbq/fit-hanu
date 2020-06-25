import React from 'react';
import {
  Grid,
  withStyles,
  styled,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import {
  Heading3,
  Paragraph,
} from 'components/Headings';
import { Button } from 'components';

const StyledGridCard = styled(Grid)({
  border: '1px solid rgba(0,0,0,.125)',
  height: '100%',
  background: '#ffffff',
});

const StyledGridHeader = styled(Grid)({
  background: '#231d1f',
  padding: '20px',
});

const StyledFAIcon = styled(FontAwesomeIcon)({
  fontSize: '22px',
  marginRight: '10px',
  color: '#fd8b4b',
});

const StyledGridDescription = styled(Grid)({
  height: '100px',
  padding: '20px',
});

const styles = () => ({
  image: {
    width: '100%',
  },
});

function HighlightCard({
  classes,
  title = '',
  image = '',
  description = '',
}) {
  return (
    <StyledGridCard>
      <StyledGridHeader container>
        <StyledFAIcon icon={faStar} />
        <Heading3
          transform="uppercase"
          color="#ffffff"
        >
          {title}
        </Heading3>
      </StyledGridHeader>
      <img className={classes.image} src={image} alt="card" />
      <StyledGridDescription>
        <Paragraph>{description}</Paragraph>
      </StyledGridDescription>
      <Button margin="0px 20px 20px auto">Read more</Button>
    </StyledGridCard>
  );
}

export default withStyles(styles)(HighlightCard);
