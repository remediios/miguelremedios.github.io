import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  ButtonContainer,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
} from './styled';
import { biography } from '@/utils/data';
import { useGlobalContext } from '@/contexts/GlobalContext';
import ModeSwitcher from './ModeSwitcher';

const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsEnabled } = useGlobalContext();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Span>{biography.name}</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink
            href="#experience"
            onClick={() => {
              setIsEnabled(true);
            }}
          >
            Experience
          </NavLink>
          <NavLink
            href="#education"
            onClick={() => {
              setIsEnabled(false);
            }}
          >
            Education
          </NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <ModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </ButtonContainer>

        {isOpen && (
          <MobileMenu $isOpen={isOpen}>
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
                setIsEnabled(true);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
                setIsEnabled(false);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <ModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
