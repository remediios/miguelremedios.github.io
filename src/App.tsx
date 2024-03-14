import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from './components/navbar';
import { darkTheme, lightTheme } from './utils/themes';
import { GlobalProvider } from './contexts/GlobalContext';
import Hero from './components/hero';
import Skills from './components/skills';
import Career from './components/career';
import Projects from './components/projects';
import { ProjectsProvider } from './contexts/ProjectsContext';

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
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Career />
          <WrapperProjects>
            <ProjectsProvider>
              <Projects />
            </ProjectsProvider>
          </WrapperProjects>
        </Body>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
