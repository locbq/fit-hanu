import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';

import { Heading3 } from 'components/Headings';
import { Link } from 'components';
import { tablData2015 } from './const';
import {
  Divider,
  StyledGridHeader,
  StyledList,
  StyledListItem,
  StyledTableCellHead,
  StyledTableCellData,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
} from './styles';

function AnnualStatistics() {
  return (
    <>
      <StyledGridHeader>
        <StyledHeading2>Annual Statistics</StyledHeading2>
        <Divider />
      </StyledGridHeader>

      <Heading3>Annual Statistics and Admission Information (From 2017)</Heading3>
      <StyledList component="ol">
        <StyledListItem>
          <Link
            href="http://hanu.vn/vn/tin-tuc-su-kien/173-tuyen-sinh/ts-news/4011-huong-dan-tra-cuu-thong-tin-tuyen-sinh-20.html"
            underline="none"
          >
            Admission Information
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link
            href="http://hanu.vn/vn/chinh-quy/169-tuyen-sinh/dai-hoc/chinh-quy/4551-diem-trung-tuyen-dai-hoc-he-chinh-quy-nam-2019.html"
            underline="none"
          >
            Matriculation Score
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link
            href="http://hanu.vn/vn/diem-trung-tuyen-cac-nam/4343-diem-trung-tuyen-vao-truong-dai-hoc-ha-noi-tu-nam-2014-2018.html"
            underline="none"
          >
            Matriculation Score in recent years
          </Link>
        </StyledListItem>
      </StyledList>

      <StyledHeading3>Previous Years</StyledHeading3>
      <StyledHeading4>Class 2015 - 2016</StyledHeading4>
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
    </>
  );
}

export default AnnualStatistics;
