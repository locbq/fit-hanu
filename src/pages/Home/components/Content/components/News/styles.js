import {
  Grid,
  styled,
} from '@material-ui/core';
import { Paragraph } from 'components/Headings';

export const StyledGridDuty = styled(Grid)({
  borderBottom: '1px solid #eeeeee',
  paddingBottom: '20px',
});

export const StyledGridTraining = styled(Grid)({
  '&:not(:last-child)': {
    borderBottom: '1px solid #eeeeee',
    paddingBottom: '20px',
  },
  '& a': {
    marginLeft: '10px',
  },
});

export const StyledGridStudentNews = styled(Grid)({
  '&:not(:last-child)': {
    borderBottom: '1px solid #eeeeee',
    paddingBottom: '20px',
  },
  '& a': {
    marginLeft: '10px',
  },
});

export const StyledParagraph = styled(Paragraph)({
  fontWeight: 'bold',
});

export const styles = () => ({
  timestamp: {
    color: '#5b5b5b',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '12px',
    fontStyle: 'italic',
  },
  text: {
    fontWeight: 'bold',
  },
});
