import { useGlobalContext } from '@/contexts/GlobalContext';
import {
  AnimatedArrow,
  Container,
  Desc,
  EducationIcon,
  SymbolWrapper,
  TimelineDotStyled,
  TimelineSection,
  Title,
  TitleDiv,
  Wrapper,
} from './style';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { experiences } from '@/utils/data';
import ExperienceCard from './card/ExperienceCard';

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
      <Desc>My work experience throughout the years</Desc>
      <Wrapper>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDotStyled variant="filled" color="warning" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: '#E3C400' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
