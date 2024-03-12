import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from './components/navbar';
import { darkTheme, lightTheme } from './utils/themes';
import { GlobalProvider } from './contexts/GlobalContext';

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <NavLink>test</NavLink>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
