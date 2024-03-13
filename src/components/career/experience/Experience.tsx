import { useGlobalContext } from '@/contexts/GlobalContext';
import {
  AnimatedArrow,
  Container,
  EducationIcon,
  SymbolWrapper,
  Title,
  TitleDiv,
} from './style';

const Experience = () => {
  const { setIsEnabled } = useGlobalContext();

  return (
    <Container id="experience">
      <TitleDiv>
        <Title>Experience</Title>
        <SymbolWrapper>
          <AnimatedArrow>
            <span></span>
            <span></span>
            <span></span>
          </AnimatedArrow>
          <EducationIcon onClick={() => setIsEnabled(false)} />
        </SymbolWrapper>
      </TitleDiv>
    </Container>
  );
};

export default Experience;
