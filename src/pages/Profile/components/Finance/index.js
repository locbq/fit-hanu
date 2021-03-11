import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import theme from 'theme';
import { calculateFee } from 'helpers';
import Button from 'components/Button';
import { Paragraph } from 'components/Headings';
import {
  StyledChip,
  StyledHeading2,
  StyledAlert,
} from './styles';
import { Field } from '../components';

function Finance({ user }) {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickSendInvoice = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setShowAlert(true);
      setIsLoading(false);
    }, 2000);
  };
  const handleClickCloseAlert = (event) => {
    event.preventDefault();
    setShowAlert(false);
  };

  return (
    <>
      <StyledAlert
        visible={showAlert}
        severity="success"
        onClose={handleClickCloseAlert}
      >
        <Paragraph>An invoice has been sent to your email!</Paragraph>
      </StyledAlert>
      <StyledHeading2>
        Current Semester
        <StyledChip
          icon={<FontAwesomeIcon icon={faCheck} />}
          label="Paid"
          variant="outlined"
          color={theme.palette.successColor}
        />
      </StyledHeading2>
      {user?.currentSemesterGrade?.map((semester) => (
        <Field
          currency
          label={semester.subject}
          value={semester.fee.toLocaleString()}
        />
      ))}
      <Field
        currency
        label="Total"
        value={calculateFee(user?.currentSemesterGrade)?.toLocaleString()}
      />
      <Grid
        container
        justify="flex-end"
      >
        <Grid
          item
          lg={3}
          md={3}
          sm={6}
          xs={6}
        >
          <Button
            loading={isLoading}
            type="button"
            onClick={handleClickSendInvoice}
          >
            Get Invoice
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Finance;
