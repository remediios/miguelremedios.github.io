import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from './components/navbar';
import { darkTheme, lightTheme } from './utils/themes';
import { GlobalProvider } from './contexts/GlobalContext';
import Hero from './components/hero';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <Hero />
        </Body>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
