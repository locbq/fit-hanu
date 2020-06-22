import {
  styled,
  Grid,
} from '@material-ui/core';
import Slider from 'react-slick';

export const StyledGrid = styled(Grid)({
  marginTop: '60px',
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

export const StyledGridCaption = styled(Grid)({
  position: 'absolute',
  marginTop: '-138px',
  width: '100%',
  padding: '20px',
  background: 'rgba(0,0,0,0.2)',
});
