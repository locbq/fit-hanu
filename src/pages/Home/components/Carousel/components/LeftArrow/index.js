import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styled from '@material-ui/core/styles/styled';
import IconButton from '@material-ui/core/IconButton';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  fontSize: '36px',
  top: '45%',
  cursor: 'pointer',
  color: theme.palette.arrowColor,
  transition: '0.25s ease-in-out',
  background: 'transparent',
  '&:hover': {
    color: theme.palette.white,
    background: 'transparent',
  },
  zIndex: '1',
  left: '0px',
}));

function LeftArrow(props) {
  const { onClick } = props;
  return (
    <StyledIconButton onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </StyledIconButton>
  );
}

export default LeftArrow;
