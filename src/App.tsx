import { ThemeProvider } from 'styled-components';

import { Body, Wrapper, WrapperProjects } from './style';
import { darkTheme, lightTheme } from './utils/themes';
import { GlobalProvider } from './contexts/GlobalContext';
import { ProjectsProvider } from './contexts/ProjectsContext';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Career from './components/career';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
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
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
