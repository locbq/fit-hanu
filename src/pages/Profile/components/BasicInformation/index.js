import React, {
  useState,
  useEffect,
} from 'react';
import {
  Grid,
  Table,
  TableRow,
} from '@material-ui/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import avatarImage from 'assets/img/our-staff/avatar.png';
import { Heading3 } from 'components/Headings';
import {
  StyledImageAvatar,
  StyledGridInfo,
  StyledTableCell,
  StyledButtonEdit,
  StyledButtonAvatar,
  StyledCircularProgress,
  StyledGridSpinner,
} from './styles';
import {
  EditModal,
  AvatarModal,
} from './components';

export default function BasicInformation({ user }) {
  const [userInfo, setUserInfo] = useState({});

  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditAvatar, setShowEditAvatar] = useState(false);
  const [avatarLink, setAvatarLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUserInfo({ ...user });
    }
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
  const hanldeClickShowEditAvatar = () => {
    setShowEditAvatar(true);
  };
  const handleClickCancleEditAvatar = () => {
    setShowEditAvatar(false);
    setAvatarLink(avatarLink);
  };
  const hanldeClickConfirmEditAvatar = (link) => {
    setIsLoading(true);
    setShowEditAvatar(false);
    setTimeout(() => {
      setAvatarLink(link);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          lg={3}
          md={3}
          sm={12}
          xs={12}
          justify="center"
        >
          {isLoading ? (
            <StyledGridSpinner
              container
              justify="center"
              alignItems="center"
            >
              <StyledCircularProgress />
            </StyledGridSpinner>
          ) : (
            <StyledImageAvatar src={avatarLink || avatarImage} alt="avatar" />
          )}
          <StyledButtonAvatar
            disabled={isLoading}
            onClick={hanldeClickShowEditAvatar}
          >
            <FontAwesomeIcon
              size="2x"
              icon={faCamera}
            />
          </StyledButtonAvatar>
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
                  {moment(userInfo?.dateOfBirth).format('DD/MM/YYYY')}
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
      <AvatarModal
        open={showEditAvatar}
        avatarLink={avatarLink}
        onConfirm={hanldeClickConfirmEditAvatar}
        onCancel={handleClickCancleEditAvatar}
      />
    </>
  );
}
