import React from 'react';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

import {
  StyledGridHeader,
  StyledFAIcon,
  StyledGridAnnouncement,
  StyledGridAnnouncementList,
  StyledHeading2,
} from './styles';
import AnnouncementCard from './components/AnnouncementCard';
import announcementList from './const';

function AnnouncementView() {
  return (
    <StyledGridAnnouncement>
      <StyledGridHeader
        container
        alignItems="center"
      >
        <StyledFAIcon icon={faBullhorn} />
        <StyledHeading2>
          Announcements
        </StyledHeading2>
      </StyledGridHeader>

      <StyledGridAnnouncementList>
        {announcementList.map((announcement) => (
          <AnnouncementCard
            title={announcement.title}
            user={announcement.user}
            timestamp={announcement.timestamp}
            content={announcement.content}
          />
        ))}
      </StyledGridAnnouncementList>
    </StyledGridAnnouncement>
  );
}

export default AnnouncementView;
