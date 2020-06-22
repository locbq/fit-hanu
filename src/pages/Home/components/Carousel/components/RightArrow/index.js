import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { IconButton, styled } from '@material-ui/core';

const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  fontSize: '36px',
  right: '0',
  top: '45%',
  cursor: 'pointer',
  color: 'rgba(255,255,255, 0.3)',
  transition: '0.25s ease-in-out',
  background: 'transparent',
  zIndex: '1',
  '&:hover': {
    color: '#FFFFFF',
    background: 'transparent',
  },
});

function RightArrow(props) {
  const { onClick } = props;
  return (
    <StyledIconButton onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </StyledIconButton>
  );
}

export default RightArrow;
