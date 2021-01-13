import React, {
  useState,
  useEffect,
} from 'react';
import {
  Grid,
  Table,
  TableRow,
} from '@material-ui/core';
import moment from 'moment';

import avatarImage from 'assets/img/our-staff/avatar.png';
import { Heading3 } from 'components/Headings';
import {
  StyledImageAvatar,
  StyledGridInfo,
  StyledTableCell,
  StyledButtonEdit,
} from './styles';
import { EditModal } from './components';

export default function BasicInformation({ user }) {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    studentId: '',
    dateOfBirth: '',
    class: '',
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [testLink, setTestLink] = useState('');

  const handleChangeTesst = (event) => {
    setTestLink(event.target.value);
  };

  useEffect(() => {
    setUserInfo({ ...user });
  }, [user]);

  const hanldeClickShowEdit = () => {
    setShowEditModal(true);
  };
  const handleClickCancleEdit = (userDetail) => {
    setShowEditModal(false);
    setUserInfo({ ...userDetail });
  };
  const hanldeClickConfirmEdit = (userDetail) => {
    setShowEditModal(false);
    setUserInfo({ ...userDetail });
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
        >
          <StyledImageAvatar src={testLink || avatarImage} alt="avatar" />
          <input value={testLink} onChange={handleChangeTesst} />
        </Grid>
        <StyledGridInfo
          item
          lg={9}
          md={9}
          sm={12}
          xs={12}
        >
          <Table>
            <TableRow>
              <StyledTableCell>
                <Heading3>
                  Fullname
                </Heading3>
              </StyledTableCell>
              <StyledTableCell>
                <Heading3>
                  {userInfo.fullName}
                </Heading3>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Heading3>
                  Student ID
                </Heading3>
              </StyledTableCell>
              <StyledTableCell>
                <Heading3>
                  {userInfo.studentId}
                </Heading3>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Heading3>
                  Date of Birth
                </Heading3>
              </StyledTableCell>
              <StyledTableCell>
                <Heading3>
                  {moment(userInfo.dateOfBirth).format('DD/MM/YYYY')}
                </Heading3>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Heading3>
                  Class
                </Heading3>
              </StyledTableCell>
              <StyledTableCell>
                <Heading3>
                  {userInfo.class}
                </Heading3>
              </StyledTableCell>
            </TableRow>
          </Table>
          <StyledButtonEdit onClick={hanldeClickShowEdit}>Edit</StyledButtonEdit>
        </StyledGridInfo>
      </Grid>

      <EditModal
        open={showEditModal}
        userInfo={userInfo}
        onConfirm={hanldeClickConfirmEdit}
        onCancel={handleClickCancleEdit}
      />
    </>
  );
}
