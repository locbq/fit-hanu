import React from 'react';
import {
  Container,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';

import {
  Section,
  BreadCrumb,
  TableOfContents,
} from 'components';
import {
  Heading2,
  Heading3,
  Heading4,
} from 'components/Headings';
import {
  contentList,
  tablData2015,
} from './const';
import {
  StyledGridContent,
  Divider,
  StyledGridHeader,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledTableCellHead,
  StyledTableCellData,
} from './styles';

function AnnualStatistics() {
  return (
    <Section backgroundcolor="#fafafa">
      <BreadCrumb />
      <Container fixed>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={8}
            sm={12}
            xs={12}
          >
            <StyledGridContent>
              <StyledGridHeader>
                <Heading2 margin="0px 0px 15px 0px">Annual Statistics</Heading2>
                <Divider />
              </StyledGridHeader>

              <Heading3>Annual Statistics and Admission Information (From 2017)</Heading3>
              <StyledList component="ol">
                <StyledListItem>
                  <StyledLink
                    href="http://hanu.vn/vn/tin-tuc-su-kien/173-tuyen-sinh/ts-news/4011-huong-dan-tra-cuu-thong-tin-tuyen-sinh-20.html"
                    underline="none"
                  >
                    Admission Information
                  </StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink
                    href="http://hanu.vn/vn/chinh-quy/169-tuyen-sinh/dai-hoc/chinh-quy/4551-diem-trung-tuyen-dai-hoc-he-chinh-quy-nam-2019.html"
                    underline="none"
                  >
                    Matriculation Score
                  </StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink
                    href="http://hanu.vn/vn/diem-trung-tuyen-cac-nam/4343-diem-trung-tuyen-vao-truong-dai-hoc-ha-noi-tu-nam-2014-2018.html"
                    underline="none"
                  >
                    Matriculation Score in recent years
                  </StyledLink>
                </StyledListItem>
              </StyledList>

              <Heading3 margin="20px 0px 12px 0px">Previous Years</Heading3>
              <Heading4 margin="0px 0px 20px 0px">Class 2015 - 2016</Heading4>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCellHead>Content</StyledTableCellHead>
                    <StyledTableCellHead>Figure</StyledTableCellHead>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tablData2015.map((row) => (
                    <TableRow>
                      {row.map((data) => (
                        <StyledTableCellData>{data}</StyledTableCellData>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            </StyledGridContent>

          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <TableOfContents links={contentList} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default AnnualStatistics;
