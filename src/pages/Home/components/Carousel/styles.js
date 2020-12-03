import {
  styled,
  Grid,
} from '@material-ui/core';
import Slider from 'react-slick';

import {
  Heading3,
  Paragraph,
} from 'components/Headings';

export const StyledGrid = styled(Grid)({
  paddingTop: '60px',
});

export const StyledSlider = styled(Slider)({
  '& .slick-slide': {
    position: 'relative',
  },
  '& .slick-dots': {
    width: 'auto',
    height: '20px',
    top: '0',
    right: '0',
  },
  '& .slick-dots li': {
    width: '10px',
    height: '10px',
    background: '#eeeeee',
    transition: '0.5s ease',
    opacity: '0.5',
  },
  '& .slick-dots .slick-active': {
    background: '#fd8b4b',
    opacity: '1',
  },
});

export const StyledGridCaption = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  marginTop: '-138px',
  width: '100%',
  padding: '20px',
  background: 'rgba(0,0,0,0.2)',
  [theme.breakpoints.down('sm')]: {
    padding: '0px',
    marginTop: '-140px',
  },
}));

export const StyledDivDots = styled('div')(() => ({
  width: '10px',
  height: '10px',
}));

export const StyledHeading3 = styled(Heading3)(({ theme }) => ({
  margin: '20px 0px',
  color: theme.palette.white,
}));

export const StyledParagraph = styled(Paragraph)(({ theme }) => ({
  margin: '12px 0px',
  color: theme.palette.white,
}));
