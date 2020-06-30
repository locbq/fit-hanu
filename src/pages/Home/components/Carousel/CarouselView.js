import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid, Container } from '@material-ui/core';
import { Heading3, Paragraph } from 'components/Headings';
import slides from './const';
import {
  StyledSlider,
  StyledGrid,
  StyledGridCaption,
} from './styles';
import { LeftArrow, RightArrow } from './components';

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
    customPaging: () => (
      <div
        style={{
          width: '10px',
          height: '10px',
        }}
      />
    ),
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
                <Heading3 color="#ffffff" margin="20px 0px">{slide.title}</Heading3>
                <Paragraph color="#ffffff" margin="12px 0px">{slide.caption}</Paragraph>
              </Container>
            </StyledGridCaption>
          </Grid>
        ))}
      </StyledSlider>
    </StyledGrid>
  );
}

export default CarouselView;
