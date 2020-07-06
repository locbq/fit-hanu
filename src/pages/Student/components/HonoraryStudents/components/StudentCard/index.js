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
  name = '',
  year = '',
  classRoom = '',
  company = '',
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
        container
        direction="column"
        justify="center"
        item
        lg={8}
        md={8}
        sm={8}
        xs={8}
      >
        <Heading4 margin="0px 0px 10px 0px">{name}</Heading4>
        <Grid container>
          <Grid item lg={5}>
            <Paragraph margin="0px 0px 5px 0px">Class:</Paragraph>
          </Grid>
          <Grid item lg={7}>
            <Paragraph margin="0px 0px 5px 0px">
              {year}
              {' '}
              -
              {' '}
              {classRoom}
            </Paragraph>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={5}>
            <Paragraph margin="0px 0px 5px 0px">Company:</Paragraph>
          </Grid>
          <Grid item lg={7}>
            <Paragraph margin="0px 0px 5px 0px">
              {company}
            </Paragraph>
          </Grid>
        </Grid>
      </Grid>
    </StyledGridCard>
  );
}

export default StudentCard;
