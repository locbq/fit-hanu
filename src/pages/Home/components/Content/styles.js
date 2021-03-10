import {
  styled,
} from '@material-ui/core';

import { Section } from 'components';

export const StyledSection = styled(Section)(({ theme }) => ({
  background: theme.palette.greyFA,
}));
