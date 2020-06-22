import {
  styled,
  Grid,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledGridAnnouncement = styled(Grid)({
  border: '1px solid rgba(0,0,0,.125)',
});

export const StyledGridHeader = styled(Grid)({
  padding: '20px',
  background: '#231d1f',
});

export const StyledGridAnnouncementList = styled(Grid)({
  padding: '20px',
});

export const StyledFAIcon = styled(FontAwesomeIcon)({
  fontSize: '22px',
  marginRight: '10px',
  color: '#fd8b4b',
});
