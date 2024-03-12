import Typewriter from 'typewriter-effect';
import {
  ContactButton,
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  Span,
  SubTitle,
  TextLoop,
  Title,
  TitleMini,
} from './style';
import HeroAnimation from './HeroAnimation';
import HeroImage from '@/images/remedios-yellow.png';
import { biography } from '@/utils/data';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <TitleMini>Hi there! I am</TitleMini>
            <Title>{biography.name}</Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: biography.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{biography.description}</SubTitle>
            <ContactButton href="#contact">Contact Me</ContactButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={HeroImage} alt="miguel-remedios-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
