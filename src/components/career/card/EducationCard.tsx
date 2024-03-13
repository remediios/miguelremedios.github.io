import {
  Body,
  Card,
  Date,
  Degree,
  Description,
  Document,
  EducationImage,
  Grade,
  ItemWrapper,
  Name,
  Span,
  Thesis,
  ThesisTopic,
  Top,
} from './style';

interface EducationCardProps {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
  thesis: string[] | string;
  doc: string;
}

const EducationCard = ({ education }: { education: EducationCardProps }) => {
  return (
    <Card>
      <Top>
        <EducationImage src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b style={{ fontWeight: 600 }}>Grade: </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
      {education?.thesis && Array.isArray(education.thesis) && (
        <>
          <Thesis>
            <h4 style={{ fontWeight: 500 }}>Dissertation</h4>
            <ItemWrapper>
              {education?.thesis?.map((thesis) => (
                <ThesisTopic key={education.id}>{thesis}</ThesisTopic>
              ))}
            </ItemWrapper>
          </Thesis>
        </>
      )}
      {education.doc && (
        <a href={education.doc} target="new">
          <Document src={education.doc} />
        </a>
      )}
    </Card>
  );
};

export default EducationCard;
