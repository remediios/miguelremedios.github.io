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
  TimelineDotStyled,
  TimelineSection,
  Title,
  Wrapper,
} from "./ExperienceStyled";

const index = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>
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
  );
};

export default index;
