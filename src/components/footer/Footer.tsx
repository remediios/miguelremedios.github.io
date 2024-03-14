import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons,
} from './style';
import { biography } from '@/utils/data';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{biography.name}</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={biography.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={biography.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Miguel Remédios. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
