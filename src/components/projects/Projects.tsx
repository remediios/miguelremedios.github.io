import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { useProjectsContext } from '@/contexts/ProjectsContext';
import {
  CardContainer,
  Container,
  Desc,
  PaginationBar,
  Title,
  Wrapper,
} from './style';
import { projects } from '@/utils/data';
import TagSelector from './TagSelector';
import ProjectCard from './card/ProjectCard';
import ProjectDetails from './details/ProjectDetails';

const Projects = () => {
  const { openModal } = useProjectsContext();
  const [toggle, setToggle] = useState('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    setPage(1);
  }, [toggle]);

  const filteredProjects =
    toggle === 'all'
      ? projects
      : projects.filter((item) => item.category === toggle);

  const indexOfFirstProject = (page - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfFirstProject + itemsPerPage
  );

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
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
        {filteredProjects.length > 3 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 2,
            }}
          >
            <PaginationBar
              count={Math.ceil(filteredProjects.length / itemsPerPage)}
              page={page}
              onChange={(_, value) => setPage(value)}
              shape="rounded"
            />
          </Box>
        )}
        {openModal.state && <ProjectDetails />}
      </Wrapper>
    </Container>
  );
};

export default Projects;
