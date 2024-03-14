import { ProjectProps } from '@/contexts/ProjectsContext';
import { Button, ButtonGroup } from './style';

interface ProjectDetailsButtons {
  project: ProjectProps | null;
}

const ProjectDetailsButtons = ({ project }: ProjectDetailsButtons) => {
  const isDemoAvailable = project?.demo !== '';

  return (
    <ButtonGroup>
      <Button $dull={isDemoAvailable} href={project?.github} target="_blank">
        View Source Code
      </Button>
      <Button $disabled={!isDemoAvailable} href={project?.demo} target="_blank">
        {isDemoAvailable ? 'View Demo' : 'Demo Not Available'}
      </Button>
    </ButtonGroup>
  );
};

export default ProjectDetailsButtons;
