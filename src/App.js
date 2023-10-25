import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import ExEduParent from "./components/ExEduParent/ExEduParent.js";
import { ContextProvider } from "./context/ContextAPI.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(252, 200, 56, 0.15) 0%,
      rgba(255, 216, 110, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(255, 198, 64, 0) 50%,
      rgba(255, 198, 64, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const WrapperProjects = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(252, 200, 56, 0.15) 0%,
      rgba(255, 216, 110, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(255, 198, 64, 0) 50%,
      rgba(255, 198, 64, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 97.75%, 0% 100%);
`;

function App() {
  // eslint-disable-next-line
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ContextProvider>
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
            </Wrapper>
            <ExEduParent />
            <WrapperProjects>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </WrapperProjects>
            {/**<Wrapper>
              <Contact />
            </Wrapper>*/}
            {/**<Footer />*/}
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </Body>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
