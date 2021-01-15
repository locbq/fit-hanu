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
import {
  Button,
  ErrorMessage,
} from 'components';
import {
  StyledGridField,
  StyledButtonCancel,
  StyledDialogActions,
  StyledGridHeading,
  StyledImagePreview,
} from './styles';

export default function EditModal({
  open,
  avatarLink,
  onConfirm,
  onCancel,
}) {
  const [link, setLink] = useState('');
  const [errorMessageImageUrl, setErrorMessageImageUrl] = useState('');

  useEffect(() => {
    if (avatarLink) {
      setLink(avatarLink);
    }
  }, [avatarLink]);

  const imageFound = () => {
    setErrorMessageImageUrl('');
  };
  const imageNotFound = () => {
    setErrorMessageImageUrl('Link chưa chính xác. Vui lòng thử lại');
  };
  const handleErrorImageUrl = (url) => {
    if (url) {
      const tester = new Image();
      tester.onload = imageFound;
      tester.onerror = imageNotFound;
      tester.src = url;
    } else {
      setErrorMessageImageUrl('');
    }
  };
  const handleChangeLink = (event) => {
    const { value } = event.target;
    handleErrorImageUrl(value.trim());
    setLink(value.trim());
  };
  const handleConfirm = () => {
    onConfirm(link);
  };
  const handleClose = () => {
    onCancel();
    setLink(avatarLink);
    setErrorMessageImageUrl('');
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
        {link && !errorMessageImageUrl ? (
          <StyledImagePreview src={link} alt="avatar" />
        ) : null}
        <StyledGridField>
          <Heading3>
            Link
          </Heading3>
          <OutlinedInput
            fullWidth
            defaultValue={link}
            onChange={handleChangeLink}
          />
          <ErrorMessage text={errorMessageImageUrl} />
        </StyledGridField>
      </DialogContent>
      <StyledDialogActions>
        <StyledButtonCancel onClick={handleClose}>
          Cancel
        </StyledButtonCancel>
        <Button
          disabled={link === '' || errorMessageImageUrl !== ''}
          onClick={handleConfirm}
        >
          Save
        </Button>
      </StyledDialogActions>
    </Dialog>
  );
}
