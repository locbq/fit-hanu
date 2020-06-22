import React from 'react';
import { Heading2 } from 'components/Headings';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import {
  StyledGridHeader,
  StyledFAIcon,
  StyledGridAnnouncement,
  StyledGridAnnouncementList,
} from './styles';
import AnnouncementCard from './components/AnnouncementCard';
import announcementList from './const';

function AnnouncementView() {
  return (
    <StyledGridAnnouncement>
      <StyledGridHeader container alignItems="center">
        <StyledFAIcon icon={faBullhorn} />
        <Heading2 color="#ffffff" transform="uppercase">
          Announcements
        </Heading2>
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
