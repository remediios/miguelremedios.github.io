import { ProjectProps, useProjectsContext } from '@/contexts/ProjectsContext';
import {
  Avatar,
  Card,
  Date,
  Description,
  Details,
  Image,
  Members,
  Tag,
  Tags,
  Title,
} from './style';

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { setOpenModal } = useProjectsContext();

  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;
