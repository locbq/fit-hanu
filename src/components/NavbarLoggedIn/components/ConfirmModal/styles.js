import { styled } from '@material-ui/core';

import { Heading3 } from 'components/Headings';
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
  color: theme.palette.greyCC,
  '&:hover': {
    background: 'transparent',
    transition: '0.25s ease-in-out',
    color: theme.palette.secondaryColor,
  },
}));

export const StyledHeading3 = styled(Heading3)(() => ({
  margin: '24px 0px',
}));
