import React from 'react';
import {
  Grid,
  Link,
  styled,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import {
  Heading4,
  Paragraph,
} from 'components/Headings';

const StyledGridCard = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.borderGrey}`,
  marginBottom: '20px',
  background: theme.palette.white,
}));

const StyledGridHeader = styled(Grid)(({ theme }) => ({
  padding: '20px',
  borderBottom: `1px solid ${theme.palette.borderGrey}`,
  '& a': {
    color: theme.palette.mainColor,
  },
}));

const StyledGridContent = styled(Grid)({
  padding: '20px',
});

const StyledFAIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  fontSize: '40px',
  marginRight: '15px',
  color: theme.palette.secondaryColor,
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
