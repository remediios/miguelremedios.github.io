import {
  Body,
  Card,
  Company,
  Date,
  Description,
  Document,
  Image,
  ItemWrapper,
  Role,
  Skill,
  Skills,
  Span,
  Top,
} from './style';

interface ExperienceCardProps {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
  doc: string;
}

const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceCardProps;
}) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <p
                style={{
                  color: '#989898',
                  fontWeight: '500',
                }}
              >
                Skills:
              </p>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
