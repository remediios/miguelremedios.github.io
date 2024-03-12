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
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
            // onClick={() => {
            //   setEnabled(true);
            // }}
          >
            Experience
          </NavLink>
          <NavLink
            href="#education"
            // onClick={() => {
            //   setEnabled(false);
            // }}
          >
            Education
          </NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          {darkMode ? (
            <BsSunFill
              style={{ color: 'white', fontSize: '20px' }}
              onClick={() => {
                setDarkMode(false);
              }}
            />
          ) : (
            <BsMoonFill
              style={{ color: 'black', fontSize: '20px' }}
              onClick={() => {
                setDarkMode(true);
              }}
            />
          )}
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
                // setEnabled(true);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
                // setEnabled(false);
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
            {darkMode ? (
              <BsSunFill
                style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }}
                onClick={() => {
                  setDarkMode(false);
                  setIsOpen(!isOpen);
                }}
              />
            ) : (
              <BsMoonFill
                style={{ color: 'black', fontSize: '20px', cursor: 'pointer' }}
                onClick={() => {
                  setDarkMode(true);
                  setIsOpen(!isOpen);
                }}
              />
            )}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
