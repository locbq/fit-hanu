import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from '@material-ui/core/styles/styled';
import IconButton from '@material-ui/core/IconButton';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  fontSize: '36px',
  right: '0',
  top: '45%',
  cursor: 'pointer',
  color: theme.palette.arrowColor,
  transition: '0.25s ease-in-out',
  background: 'transparent',
  zIndex: '1',
  '&:hover': {
    color: theme.palette.white,
    background: 'transparent',
  },
}));

function RightArrow(props) {
  const { onClick } = props;
  return (
    <StyledIconButton onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </StyledIconButton>
  );
}

export default RightArrow;
