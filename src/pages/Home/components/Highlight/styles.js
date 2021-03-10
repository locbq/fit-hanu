import styled from '@material-ui/core/styles/styled';

import { Section } from 'components';

export const StyledSection = styled(Section)(({ theme }) => ({
  background: theme.palette.greyFA,
}));
