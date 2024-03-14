import { useState } from 'react';
import { CardContainer, Container, Desc, Title, Wrapper } from './style';
import TagSelector from './TagSelector';
import { projects } from '@/utils/data';
import ProjectCard from './card/ProjectCard';
import { useProjectsContext } from '@/contexts/ProjectsContext';
import ProjectDetails from './details/ProjectDetails';

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  const { openModal } = useProjectsContext();
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have been working on a range of different projects throughout time.
          Here is an overview of my projects.
        </Desc>
        <TagSelector toggle={toggle} setToggle={setToggle} />
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </CardContainer>
        {openModal.state && <ProjectDetails />}
      </Wrapper>
    </Container>
  );
};

export default Projects;
