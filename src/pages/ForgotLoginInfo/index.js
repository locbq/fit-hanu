import React from 'react';
import {
  Grid,
  Container,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Heading4 } from 'components/Headings';
import {
  StyledGrid,
  StyledParagraph,
  StyledInput,
  StyledButtonSearch,
} from './styles';

function ForgotLoginInfo() {
  return (
    <Container fixed>
      <StyledGrid>
        <StyledParagraph align="center">
          To reset your password, submit your username or your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.
        </StyledParagraph>

        <Grid
          container
          justify="center"
        >
          <Grid
            item
            lg={8}
            md={8}
            sm={12}
            xs={12}
          >
            <Heading4 margin="20px 0px 10px 0px">Search By Username</Heading4>
            <Grid
              container
              wrap="nowrap"
            >
              <StyledInput
                fullWidth
                placeholder="123456789"
              />
              <StyledButtonSearch>
                <FontAwesomeIcon icon={faSearch} />
              </StyledButtonSearch>
            </Grid>

            <Heading4 margin="20px 0px 10px 0px">Search By Email</Heading4>
            <Grid
              container
              wrap="nowrap"
            >
              <StyledInput
                fullWidth
                placeholder="emailaddress@mail.com"
              />
              <StyledButtonSearch>
                <FontAwesomeIcon icon={faSearch} />
              </StyledButtonSearch>
            </Grid>
          </Grid>

        </Grid>
      </StyledGrid>
    </Container>
  );
}

export default ForgotLoginInfo;
