import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  TitleMini,
} from "./HeroStyle";
import HeroImg from "../../images/remedios-yellow.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <TitleMini>Hi there! I am</TitleMini>
            <Title>{Bio.name}</Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href="#contact">Contact Me</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="miguel-remedios-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
