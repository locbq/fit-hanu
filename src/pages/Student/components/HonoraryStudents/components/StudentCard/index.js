import React from 'react';
import {
  styled,
  Grid,
} from '@material-ui/core';

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

function StudentCard({
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
        <Image src={image} alt="avatar" />
      </Grid>
      <Grid
        item
        lg={8}
        md={8}
        sm={8}
        xs={8}
      >
        <Heading4 margin="0px 0px 10px 0px">{title}</Heading4>
        <Paragraph margin="0px 0px 5px 0px">{name}</Paragraph>
        <Paragraph margin="0px 0px 5px 0px">{office}</Paragraph>
        <Paragraph margin="0px 0px 5px 0px">{phone}</Paragraph>
      </Grid>
    </StyledGridCard>
  );
}

export default StudentCard;
