import {
  Grid,
  styled,
} from '@material-ui/core';

import { Paragraph } from 'components/Headings';

export const StyledGridDuty = styled(Grid)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.borderGrey}`,
  paddingBottom: '20px',
}));

export const StyledGridTraining = styled(Grid)(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.borderGrey}`,
    paddingBottom: '20px',
  },
  '& a': {
    marginLeft: '10px',
  },
}));

export const StyledGridStudentNews = styled(Grid)(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.borderGrey}`,
    paddingBottom: '20px',
  },
  '& a': {
    marginLeft: '10px',
  },
}));

export const StyledParagraph = styled(Paragraph)({
  fontWeight: 'bold',
});

export const styles = (theme) => ({
  timestamp: {
    color: theme.palette.darkGrey5B,
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '12px',
    fontStyle: 'italic',
  },
  text: {
    fontWeight: 'bold',
  },
});
