/* eslint-disable max-len */
import React from 'react';
import {
  Grid,
  Link,
  withStyles,
} from '@material-ui/core';
import imgBasicComputer from 'assets/img/home/basic-computer-training.jpg';
import { Heading4, Paragraph } from 'components/Headings';
import { NewsCard } from './components';
import {
  styles,
  StyledGridTraining,
  StyledParagraph,
  StyledGridDuty,
  StyledGridStudentNews,
} from './styles';

function NewsView({ classes }) {
  return (
    <Grid>
      <NewsCard title="Training Program">
        <Link href="!#" underline="none">Click here for more information</Link>
      </NewsCard>

      <NewsCard
        title="Basic computer training"
        image={imgBasicComputer}
      >
        <Paragraph margin="12px 0px">
          Bộ môn Tin học cơ sở giảng dạy học phần Tin học cơ sở cho toàn bộ sinh viên của trường Đại học Hà Nội.
        </Paragraph>
        <Link href="!#" underline="none">Thông tin mô tả học phần tin học cơ sở</Link>
        <Link href="!#" underline="none">Lịch học và các thông báo của bộ môn</Link>
      </NewsCard>

      <NewsCard title="Academic Coordinator">
        <StyledGridDuty>
          <Heading4 margin="0px 0px 20px 0px" transform="uppercase">Bachelor of IT</Heading4>
          <Paragraph>Mr. Viet Phuong HOANG, room 210 building C</Paragraph>
        </StyledGridDuty>

        <StyledGridDuty>
          <Heading4 margin="20px 0px" transform="uppercase">Computing Skills</Heading4>
          <Paragraph>Ms. Thu Huyen TRINH, room 210 building C</Paragraph>
        </StyledGridDuty>
        <Paragraph margin="20px 0px 0px 0px">Monday - Friday: 14:00 - 16:00</Paragraph>
      </NewsCard>

      <NewsCard title="Academic News">
        <StyledGridTraining>
          <Heading4 margin="20px 0px" transform="uppercase">Tin học cơ sở</Heading4>
          <StyledParagraph margin="10px 0px">Mở lớp Tin học cơ sở (THCS) đợt 3 năm học 2015 - 2016</StyledParagraph>
          <span className={classes.timestamp}>Posted: 2 March, 2020</span>
          <Paragraph margin="10px 0px">
            Căn cứ theo khung thời gian và chương trình học của sinh viên hệ chính quy
            <Link href="!#" underline="none">more</Link>
          </Paragraph>
        </StyledGridTraining>

        <StyledGridTraining>
          <Heading4 margin="20px 0px" transform="uppercase">Timetable & Exam schedule</Heading4>
          <StyledParagraph margin="10px 0px">Spring 2020 Timetable</StyledParagraph>
          <span className={classes.timestamp}>Posted: 6 February, 2020</span>
          <Paragraph>
            Ver 1.1 (06/02/2020)
            <Link href="!#" underline="none"> more</Link>
          </Paragraph>
        </StyledGridTraining>

        <StyledGridTraining>
          <Heading4 margin="20px 0px" transform="uppercase">Course mark collection</Heading4>
          <StyledParagraph margin="10px 0px">Thông báo về học bổng Erasmus kỳ 2 năm học 2016-2017</StyledParagraph>
          <span className={classes.timestamp}>Posted: 28 November, 2019</span>
          <Paragraph margin="10px 0px">
            Thông báo điểm thi hết môn ISD lớp học lại Fall 2019
            <Link href="!#" underline="none">more</Link>
          </Paragraph>
        </StyledGridTraining>
      </NewsCard>

      <NewsCard title="Student News">
        <StyledGridStudentNews>
          <Heading4 margin="20px 0px" transform="uppercase">Scholarship</Heading4>
          <StyledParagraph margin="10px 0px">Thông báo về học bổng Erasmus kỳ 2 năm học 2016-2017</StyledParagraph>
          <span className={classes.timestamp}>Posted: 2 March, 2020</span>
          <Paragraph margin="10px 0px">
            Căn cứ theo khung thời gian và chương trình học của sinh viên hệ chính quy
            <Link href="!#" underline="none">more</Link>
          </Paragraph>
        </StyledGridStudentNews>

        <StyledGridStudentNews>
          <Heading4 margin="20px 0px" transform="uppercase">Job Opportunities</Heading4>
          <StyledParagraph margin="10px 0px">Thông báo tuyển dụng kĩ sư làm việc tại Nhật Bản</StyledParagraph>
          <span className={classes.timestamp}>Posted: 2 March, 2020</span>
          <Paragraph margin="10px 0px">
            Thông báo tuyển dụng kĩ sư làm việc tại Nhật Bản (xem file đính kèm)
            <Link href="!#" underline="none">more</Link>
          </Paragraph>
        </StyledGridStudentNews>

        <StyledGridStudentNews>
          <Heading4 margin="20px 0px" transform="uppercase">Research & Development</Heading4>
          <StyledParagraph margin="10px 0px">V/v nhận tiền nhuận bút hội thảo khoa học sinh viên năm 2019</StyledParagraph>
          <span className={classes.timestamp}>Posted: 2 March, 2020</span>
          <Paragraph margin="10px 0px">
            Gửi các em sinh viên Mời các em sinh viên có tên trong danh sách đến VPK gặp cô H
            <Link href="!#" underline="none">more</Link>
          </Paragraph>
        </StyledGridStudentNews>

        <StyledGridStudentNews>
          <Heading4 margin="20px 0px" transform="uppercase">Student Activities</Heading4>
          <StyledParagraph margin="10px 0px">Gameloft Hà Nội, Việt Nam khởi động cuộc thi Lập trình Trí Tuệ Nhân Tạo 2016</StyledParagraph>
          <span className={classes.timestamp}>Posted: 2 March, 2020</span>
          <Paragraph margin="10px 0px">
            Gameloft Hà Nội, Việt Nam khởi động cuộc thi Lập trình Trí Tuệ Nhân Tạo 2016
            <Link href="!#" underline="none">more</Link>
          </Paragraph>
        </StyledGridStudentNews>
      </NewsCard>
    </Grid>
  );
}

export default withStyles(styles)(NewsView);
