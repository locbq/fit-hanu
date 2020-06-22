import { styled, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledGridAnnouncement = styled(Grid)({
  border: '1px solid rgba(0,0,0,.125)',
});

const StyledGridHeader = styled(Grid)({
  padding: '20px',
  background: '#231d1f',
});

const StyledGridAnnouncementList = styled(Grid)({
  padding: '20px',
});

const StyledFAIcon = styled(FontAwesomeIcon)({
  fontSize: '22px',
  marginRight: '10px',
  color: '#fd8b4b',
});

export {
  StyledFAIcon,
  StyledGridHeader,
  StyledGridAnnouncement,
  StyledGridAnnouncementList,
};
