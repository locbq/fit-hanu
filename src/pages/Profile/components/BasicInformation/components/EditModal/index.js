import React, {
  useState,
  useEffect,
} from 'react';
import moment from 'moment';
import {
  Dialog,
  DialogContent,
  OutlinedInput,
} from '@material-ui/core';

import {
  Heading2,
  Heading3,
} from 'components/Headings';
import { Button } from 'components';
import {
  StyledGridField,
  StyledButtonCancel,
  StyledInput,
  StyledDialogActions,
  StyledGridHeading,
} from './styles';

export default function EditModal({
  open,
  userInfo,
  onConfirm,
  onCancel,
}) {
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    fullName: '',
    studentId: '',
    dateOfBirth: '',
    class: '',
  });

  useEffect(() => {
    if (userInfo) {
      setUpdatedUserInfo({
        ...userInfo,
        dateOfBirth: moment(userInfo.dateOfBirth).format('YYYY-MM-DD'),
      });
    }
  }, [userInfo]);

  const handleChangeUsername = (event) => {
    setUpdatedUserInfo({ ...updatedUserInfo, fullName: event.target.value });
  };
  const handleChangeDateOfBirth = (event) => {
    setUpdatedUserInfo({ ...updatedUserInfo, dateOfBirth: event.target.value });
  };
  const handleConfirm = () => {
    onConfirm(updatedUserInfo);
  };
  const handleClose = () => {
    onCancel(userInfo);
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <StyledGridHeading>
        <Heading2>Edit</Heading2>
      </StyledGridHeading>
      <DialogContent>

        <StyledGridField>
          <Heading3>
            Fullname
          </Heading3>
          <OutlinedInput
            fullWidth
            defaultValue={updatedUserInfo.fullName}
            onChange={handleChangeUsername}
          />
        </StyledGridField>
        <StyledGridField>
          <Heading3>
            Student ID
          </Heading3>
          <StyledInput
            disabled
            fullWidth
            defaultValue={updatedUserInfo.studentId}
          />
        </StyledGridField>
        <StyledGridField>
          <Heading3>
            Date of Birth
          </Heading3>
          <OutlinedInput
            type="date"
            fullWidth
            defaultValue={updatedUserInfo.dateOfBirth}
            onChange={handleChangeDateOfBirth}
          />
        </StyledGridField>
        <StyledGridField>
          <Heading3>
            Class
          </Heading3>
          <StyledInput
            disabled
            fullWidth
            defaultValue={updatedUserInfo.class}
          />
        </StyledGridField>
      </DialogContent>
      <StyledDialogActions>
        <StyledButtonCancel onClick={handleClose}>
          Cancel
        </StyledButtonCancel>
        <Button onClick={handleConfirm}>
          Save
        </Button>
      </StyledDialogActions>
    </Dialog>
  );
}
