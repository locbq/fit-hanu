import {
  styled,
  Grid,
  Link,
} from '@material-ui/core';

export const StyledGridContent = styled(Grid)({
  background: '#ffffff',
  padding: '20px',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
});

export const Divider = styled(Grid)({
  width: '70%',
  height: '3px',
  background: '#fd8b4b',
});

export const StyledGridHeader = styled(Grid)({
  marginBottom: '15px',
});

export const StyledLink = styled(Link)({
  color: '#fd8b4b',
  transition: '0.25s ease-in-out',
  '&:hover': {
    color: '#231d1f',
  },
});
