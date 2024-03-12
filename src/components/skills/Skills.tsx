import { skills } from '@/utils/data';
import {
  Container,
  Description,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillTitle,
  SkillsContainer,
  Title,
  Wrapper,
} from './style';

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Technical Skills</Title>
        <Description>
          An overview of my technology stack capabilities and tools used
          throughout my work
        </Description>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
