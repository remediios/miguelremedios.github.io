import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { education, experiences } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import {
  Container,
  Desc,
  ExperienceIcon,
  TimelineDotStyled,
  TimelineSection,
  Title,
  TitleDiv,
  Wrapper,
} from "./EducationStyled";

const index = ({ setEnabled }) => {
  return (
    <Container id="education">
      <TitleDiv>
        <Title>Education</Title>
        <ExperienceIcon
          onClick={() => {
            setEnabled(true);
          }}
        />
      </TitleDiv>
      <Desc>My academic journey throughout the years</Desc>
      <Wrapper>
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDotStyled variant="filled" color="warning" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: "#E3C400" }} />
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

export default index;
