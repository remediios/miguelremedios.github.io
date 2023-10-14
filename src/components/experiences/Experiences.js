import React from "react";
import { experiences } from "../../config/data";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";

function Experiences() {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Qualifications
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
