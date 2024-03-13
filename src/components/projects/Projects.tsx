import { useState } from 'react';
import { Container, Desc, Title, Wrapper } from './style';
import TagSelector from './TagSelector';

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have been working on a range of different projects throughout time.
          Here is an overview of my projects.
        </Desc>
        <TagSelector toggle={toggle} setToggle={setToggle} />
      </Wrapper>
    </Container>
  );
};

export default Projects;
