import React, {
  useState,
  useEffect,
} from 'react';
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
  StyledDialogActions,
  StyledGridHeading,
} from './styles';

export default function EditModal({
  open,
  avatarLink,
  onConfirm,
  onCancel,
}) {
  const [link, setLink] = useState('');

  useEffect(() => {
    if (avatarLink) {
      setLink(avatarLink);
    }
  }, [avatarLink]);

  const handleChangeLink = (event) => {
    setLink(event.target.value);
  };
  const handleConfirm = () => {
    onConfirm(link);
  };
  const handleClose = () => {
    onCancel();
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
            Link
          </Heading3>
          <OutlinedInput
            fullWidth
            defaultValue={link}
            onChange={handleChangeLink}
          />
        </StyledGridField>
      </DialogContent>
      <StyledDialogActions>
        <StyledButtonCancel onClick={handleClose}>
          Cancel
        </StyledButtonCancel>
        <Button
          disabled={link === ''}
          onClick={handleConfirm}
        >
          Save
        </Button>
      </StyledDialogActions>
    </Dialog>
  );
}
