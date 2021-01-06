import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

import {
  StyledButtonConfirm,
  StyledButtonCancel,
  StyledHeading3,
} from './styles';

export default function ConfirmModal({
  open,
  onConfirm,
  onCancel,
}) {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleClose = () => {
    onCancel();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <StyledHeading3>
            Are you sure you want to logout?
          </StyledHeading3>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <StyledButtonCancel onClick={handleClose}>
          Cancel
        </StyledButtonCancel>
        <StyledButtonConfirm onClick={handleConfirm}>
          Yes
        </StyledButtonConfirm>
      </DialogActions>
    </Dialog>
  );
}
