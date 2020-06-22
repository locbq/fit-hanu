import { Grid, styled } from '@material-ui/core';
import { Paragraph } from 'components/Headings';

const StyledGridDuty = styled(Grid)({
  borderBottom: '1px solid #eeeeee',
  paddingBottom: '20px',
});

const StyledGridTraining = styled(Grid)({
  '&:not(:last-child)': {
    borderBottom: '1px solid #eeeeee',
    paddingBottom: '20px',
  },
  '& a': {
    marginLeft: '10px',
  },
});

const StyledGridStudentNews = styled(Grid)({
  '&:not(:last-child)': {
    borderBottom: '1px solid #eeeeee',
    paddingBottom: '20px',
  },
  '& a': {
    marginLeft: '10px',
  },
});

const StyledParagraph = styled(Paragraph)({
  fontWeight: 'bold',
});

const styles = () => ({
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

export {
  styles,
  StyledGridTraining,
  StyledParagraph,
  StyledGridDuty,
  StyledGridStudentNews,
};
