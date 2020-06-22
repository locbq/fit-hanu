import { Section } from 'components';
import {
  StyledGrid,
  StyledGridBanner,
} from './styles';

function Login() {
  return (
    <Section padding="60px 0px 0px 0px">
      <StyledGrid container>
        <StyledGridBanner item lg={6} />
      </StyledGrid>
    </Section>
  );
}

export default Login;
