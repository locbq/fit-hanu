import React, {
  useEffect,
  useState,
} from 'react';
import { Container } from '@material-ui/core';

import { Section } from 'components';
import { decrypt } from 'helpers/encrypt';
import { getUserDetail } from 'helpers/user/getUserDetail';
import { BasicInformation } from './components';
import { StyledGridContent } from './styles';

export default function ProfileView() {
  const token = localStorage.getItem('token');

  const [userDetail, seUserDetail] = useState({});

  useEffect(() => {
    if (!token) {
      window.location.href = '/';
    } else {
      const decryptToken = decrypt(token);
      const { username } = decryptToken;
      const user = getUserDetail(username);
      seUserDetail(user);
    }
  }, [token]);

  return (
    <Section>
      <Container fixed>
        <StyledGridContent>
          <BasicInformation
            fullName={userDetail.fullName}
            studentId={userDetail.studentId}
            dateOfBirth={userDetail.dateOfBirth}
            classRoom={userDetail.class}
            gpa={userDetail.gpa}
          />
        </StyledGridContent>
      </Container>
    </Section>
  );
}
