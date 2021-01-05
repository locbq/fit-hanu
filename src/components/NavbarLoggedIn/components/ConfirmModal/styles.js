import { styled } from '@material-ui/core';

import Button from 'components/Button';

export const StyledButtonConfirm = styled(Button)(({ theme }) => ({
  background: 'transparent',
  width: 'auto',
  color: theme.palette.mainColor,
  '&:hover': {
    background: 'transparent',
    transition: '0.25s ease-in-out',
    color: theme.palette.secondaryColor,
  },
}));

export const StyledButtonCancel = styled(Button)(({ theme }) => ({
  background: 'transparent',
  width: 'auto',
  color: theme.palette.borderInput,
  '&:hover': {
    background: 'transparent',
    transition: '0.25s ease-in-out',
    color: theme.palette.secondaryColor,
  },
}));
