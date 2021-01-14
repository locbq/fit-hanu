import React, {
  useEffect,
  useState,
} from 'react';
import { Container } from '@material-ui/core';

import { Section } from 'components';
import { decrypt } from 'helpers/encrypt';
import { getUserDetail } from 'helpers/user/getUserDetail';
import { Route, Switch } from 'react-router';
import {
  BasicInformation,
  Timetable,
  Finance,
  Grades,
  Graduation,
  ProfileNavbar,
} from './components';
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
          <BasicInformation user={userDetail} />
        </StyledGridContent>
        <ProfileNavbar />
        <StyledGridContent>
          <Switch>
            <Route
              exact
              path="/profile"
              component={Grades}
            />
            <Route
              exact
              path="/profile/grades"
              render={(props) => (
                <Grades {...props} user={userDetail} />
              )}
            />
            <Route
              exact
              path="/profile/timetable"
              render={(props) => (
                <Timetable {...props} user={userDetail} />
              )}
            />
            <Route
              exact
              path="/profile/finance"
              component={Finance}
            />
            <Route
              exact
              path="/profile/graduation"
              component={Graduation}
            />
          </Switch>
        </StyledGridContent>
      </Container>
    </Section>
  );
}
