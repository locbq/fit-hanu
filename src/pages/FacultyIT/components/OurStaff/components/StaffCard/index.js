import React from 'react';
import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';

import {
  Heading4,
  Paragraph,
} from 'components/Headings';

const StyledGridCard = styled(Grid)({
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: '0px',
  },
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledHeading4 = styled(Heading4)(() => ({
  margin: '0px 0px 10px 0px',
}));

const StyledParagraph = styled(Paragraph)(() => ({
  margin: '0px 0px 5px 0px',
}));

function StaffCard({
  image = '',
  title = '',
  name = '',
  office = '',
  phone = '',
}) {
  return (
    <StyledGridCard
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={4}
        sm={4}
        xs={4}
      >
        <Image
          src={image}
          alt="avatar"
        />
      </Grid>
      <Grid
        item
        lg={8}
        md={8}
        sm={8}
        xs={8}
      >
        <StyledHeading4>{title}</StyledHeading4>
        <StyledParagraph>{name}</StyledParagraph>
        <StyledParagraph>{office}</StyledParagraph>
        <StyledParagraph>{phone}</StyledParagraph>
      </Grid>
    </StyledGridCard>
  );
}

export default StaffCard;
