import React from 'react';
import {
  Grid,
  styled,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import {
  Heading3,
  Paragraph,
} from 'components/Headings';
import { Button } from 'components';

const StyledGridCard = styled(Grid)(({ theme }) => ({
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  height: '100%',
  background: theme.palette.white,
}));

const StyledGridHeader = styled(Grid)(({ theme }) => ({
  background: theme.palette.secondaryColor,
  padding: '20px',
}));

const StyledFAIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  fontSize: '22px',
  marginRight: '10px',
  color: theme.palette.mainColor,
}));

const StyledGridDescription = styled(Grid)({
  height: '100px',
  padding: '20px',
});

const StyledButton = styled(Button)({
  margin: '0px 20px 20px auto',
});

const StyledImage = styled('img')(() => ({
  width: '100%',
}));

function HighlightCard({
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
      <StyledImage
        src={image}
        alt="card"

      />
      <StyledGridDescription>
        <Paragraph>{description}</Paragraph>
      </StyledGridDescription>
      <StyledButton>Read more</StyledButton>
    </StyledGridCard>
  );
}

export default HighlightCard;
