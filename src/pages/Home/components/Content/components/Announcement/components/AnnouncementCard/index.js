import React from 'react';
import { Grid, Link, styled } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Heading4, Paragraph } from 'components/Headings';

const StyledGridCard = styled(Grid)({
  border: '1px solid #eeeeee',
  marginBottom: '20px',
  background: '#ffffff',
});

const StyledGridHeader = styled(Grid)({
  padding: '20px',
  borderBottom: '1px solid #eeeeee',
  '& a': {
    color: '#fd8b4b',
  },
});

const StyledGridContent = styled(Grid)({
  padding: '20px',
});

const StyledFAIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  fontSize: '40px',
  marginRight: '15px',
  color: '#231d1f',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

function AnnouncementCard({
  title = '',
  user = '',
  timestamp = '',
  content = '',
}) {
  return (
    <StyledGridCard>
      <StyledGridHeader container>
        <StyledFAIcon icon={faUserCircle} />
        <Grid>
          <Heading4>{title}</Heading4>
          <Paragraph>
            By
            {' '}
            <Link href="!#" underline="none">{user}</Link>
            {' '}
            -
            {' '}
            {timestamp}
          </Paragraph>
        </Grid>
      </StyledGridHeader>
      <StyledGridContent>
        <Paragraph align="justify">{content}</Paragraph>
      </StyledGridContent>
    </StyledGridCard>
  );
}

export default AnnouncementCard;
