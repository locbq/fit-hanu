import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { IconButton, styled } from '@material-ui/core';

const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  fontSize: '36px',
  top: '45%',
  cursor: 'pointer',
  color: 'rgba(255,255,255, 0.3)',
  transition: '0.25s ease-in-out',
  background: 'transparent',
  '&:hover': {
    color: '#FFFFFF',
    background: 'transparent',
  },
  zIndex: '1',
  left: '0px',
});

function LeftArrow(props) {
  const { onClick } = props;
  return (
    <StyledIconButton onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </StyledIconButton>
  );
}

export default LeftArrow;
