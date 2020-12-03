import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Grid,
  Container,
} from '@material-ui/core';

import slides from './const';
import {
  StyledSlider,
  StyledGrid,
  StyledGridCaption,
  StyledDivDots,
  StyledHeading3,
  StyledParagraph,
} from './styles';
import {
  LeftArrow,
  RightArrow,
} from './components';

function CarouselView() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    autoplay: true,
    customPaging: () => <StyledDivDots />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <StyledGrid>
      <StyledSlider {...settings}>
        {slides.map((slide) => (
          <Grid>
            <img
              src={slide.image}
              alt="slide"
            />
            <StyledGridCaption>
              <Container fixed>
                <StyledHeading3>{slide.title}</StyledHeading3>
                <StyledParagraph>{slide.caption}</StyledParagraph>
              </Container>
            </StyledGridCaption>
          </Grid>
        ))}
      </StyledSlider>
    </StyledGrid>
  );
}

export default CarouselView;
