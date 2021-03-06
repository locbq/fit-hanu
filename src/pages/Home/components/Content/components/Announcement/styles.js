import styled from '@material-ui/core/styles/styled';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Heading2 } from 'components/Headings';

export const StyledGridAnnouncement = styled(Grid)({
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  background: '#ffffff',
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

export const StyledHeading2 = styled(Heading2)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.white,
}));
