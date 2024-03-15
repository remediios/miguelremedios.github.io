import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { useGlobalContext } from '@/contexts/GlobalContext';
import {
  AnimatedArrow,
  Container,
  Desc,
  ExperienceIcon,
  SymbolWrapper,
  TimelineDotStyled,
  TimelineSection,
  Title,
  TitleDiv,
  Wrapper,
} from './style';
import { education as education } from '@/utils/data';
import EducationCard from '../card/EducationCard';

const Education = () => {
  const { setIsEnabled } = useGlobalContext();

  return (
    <Container id="education">
      <TitleDiv>
        <Title>Education</Title>
        <SymbolWrapper>
          <AnimatedArrow>
            <span></span>
            <span></span>
            <span></span>
          </AnimatedArrow>
          <ExperienceIcon onClick={() => setIsEnabled(true)} />
        </SymbolWrapper>
      </TitleDiv>
      <Desc>My academic journey throughout the years</Desc>
      <Wrapper>
        <TimelineSection>
          <Timeline>
            {education.map((item, index) => (
              <TimelineItem key={item.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={item} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDotStyled variant="filled" color="warning" />
                  {index !== education.length - 1 && (
                    <>
                      <TimelineConnector style={{ background: '#D52B2B' }} />
                    </>
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
