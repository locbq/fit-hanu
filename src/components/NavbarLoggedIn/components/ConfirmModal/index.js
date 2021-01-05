import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import {
  Heading3,
  Heading4,
} from 'components/Headings';
import {
  StyledButtonConfirm,
  StyledButtonCancel,
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
      <DialogTitle id="alert-dialog-title">
        <Heading4>Warning</Heading4>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Heading3>
            Are you sure you want to logout?
          </Heading3>
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
