import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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
