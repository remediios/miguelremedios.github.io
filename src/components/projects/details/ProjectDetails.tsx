import { useProjectsContext } from '@/contexts/ProjectsContext';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import { useRef } from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  Date,
  Desc,
  Image,
  Label,
  Member,
  MemberImage,
  MemberName,
  Members,
  Tag,
  Tags,
  Title,
  Wrapper,
} from './style';

const ProjectDetails = () => {
  const { openModal, setOpenModal } = useProjectsContext();
  const modalRef = useRef(null);
  const project = openModal?.project;

  const handleClose = () => setOpenModal({ state: false, project: null });

  console.log(openModal);

  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Container ref={modalRef}>
          <Wrapper>
            <CloseRounded
              style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            />
            <Image src={project?.image} />
            <Title>{project?.title}</Title>
            <Date>{project?.date}</Date>
            <Tags>
              {project?.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
            <Desc>{project?.description}</Desc>
            {project?.member && (
              <>
                <Label>Members</Label>
                <Members>
                  {project?.member.map((member) => (
                    <Member>
                      <MemberImage src={member.img} />
                      <MemberName>{member.name}</MemberName>
                      <a
                        href={member.github}
                        target="new"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <GitHub />
                      </a>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="new"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <LinkedIn />
                        </a>
                      )}
                    </Member>
                  ))}
                </Members>
              </>
            )}
            <ButtonGroup>
              <Button $dull href={project?.github} target="new">
                View Source Code
              </Button>
              <Button href={project?.demo} target="new">
                View Demo
              </Button>
            </ButtonGroup>
          </Wrapper>
        </Container>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
