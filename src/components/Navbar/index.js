import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { enabled, setEnabled } = useContext(ContextAPI);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <Span>{Bio.name}</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink
            href="#experience"
            onClick={() => {
              setEnabled(true);
            }}
          >
            Experience
          </NavLink>
          <NavLink
            href="#education"
            onClick={() => {
              setEnabled(false);
            }}
          >
            Education
          </NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          {darkMode ? (
            <BsSunFill
              style={{ color: "white", fontSize: "20px" }}
              onClick={() => {
                setDarkMode(false);
              }}
            />
          ) : (
            <BsMoonFill
              style={{ color: "black", fontSize: "20px" }}
              onClick={() => {
                setDarkMode(true);
              }}
            />
          )}
          {/** <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>*/}
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            {/**<GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton> */}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
