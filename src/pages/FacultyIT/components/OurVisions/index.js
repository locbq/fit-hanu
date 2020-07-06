import React from 'react';
import {
  Heading2,
  Heading3,
  Paragraph,
} from 'components/Headings';
import {
  Divider,
  StyledGridHeader,
  StyledList,
  StyledListItem,
} from './styles';

function OurVisions() {
  return (
    <>
      <StyledGridHeader>
        <Heading2 margin="0px 0px 15px 0px">Our Visions</Heading2>
        <Divider />
      </StyledGridHeader>

      <Heading3
        margin="12px 0px"
        transform="capitalize"
      >
        Core values
      </Heading3>
      <Paragraph
        margin="12px 0px"
        align="justify"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum tempus maximus. Suspendisse facilisis interdum enim eget hendrerit. Fusce rhoncus feugiat dui, eu pharetra nulla pulvinar non. Morbi sagittis blandit lorem.
      </Paragraph>
      <StyledList>
        <StyledListItem>
          <Paragraph>Vestibulum venenatis, mauris in dictum congue</Paragraph>
        </StyledListItem>
        <StyledListItem>
          <Paragraph>Nulla quis ex ultrices, pretium ligula id, elementum nunc</Paragraph>
        </StyledListItem>
        <StyledListItem>
          <Paragraph>Vestibulum venenatis, mauris in dictum congueCras ultrices massa quis mauris auctor rhoncus. Nunc non diam vel odio sollicitudin ultricies in posuere dui</Paragraph>
        </StyledListItem>
        <StyledListItem>
          <Paragraph>Donec scelerisque ipsum non justo pulvinar tincidunt. Quisque quis dictum turpis, et blandit metus. Morbi egestas dignissim cursus.</Paragraph>
        </StyledListItem>
      </StyledList>

      <Heading3
        margin="24px 0px 12px 0px"
        transform="capitalize"
      >
        Visions
      </Heading3>
      <Paragraph
        margin="12px 0px"
        align="justify"
      >
        <StyledList>
          <StyledListItem>
            <Paragraph>Vestibulum venenatis, mauris in dictum congue</Paragraph>
          </StyledListItem>
          <StyledListItem>
            <Paragraph>Nulla quis ex ultrices, pretium ligula id, elementum nunc</Paragraph>
          </StyledListItem>
          <StyledListItem>
            <Paragraph>Vestibulum venenatis, mauris in dictum congueCras ultrices massa quis mauris auctor rhoncus. Nunc non diam vel odio sollicitudin ultricies in posuere dui</Paragraph>
          </StyledListItem>
          <StyledListItem>
            <Paragraph>Donec scelerisque ipsum non justo pulvinar tincidunt. Quisque quis dictum turpis, et blandit metus. Morbi egestas dignissim cursus.</Paragraph>
          </StyledListItem>
        </StyledList>
      </Paragraph>
    </>
  );
}

export default OurVisions;