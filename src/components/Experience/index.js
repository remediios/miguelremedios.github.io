import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";
import {
  Container,
  Desc,
  EducationIcon,
  TimelineDotStyled,
  TimelineSection,
  Title,
  TitleDiv,
  Wrapper,
} from "./ExperienceStyled";

const index = ({ setEnabled }) => {
  return (
    <>
      <Container id="experience">
        <TitleDiv>
          <Title>Experience</Title>
          <EducationIcon
            onClick={() => {
              setEnabled(false);
            }}
          />
        </TitleDiv>
        <Desc>My work experience throughout the years</Desc>
        <Wrapper>
          <TimelineSection>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDotStyled variant="filled" color="warning" />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector style={{ background: "#E3C400" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineSection>
        </Wrapper>
      </Container>
    </>
  );
};

export default index;
