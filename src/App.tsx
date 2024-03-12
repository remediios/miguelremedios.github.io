import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/navbar';
import { darkTheme, lightTheme } from './utils/themes';
import { GlobalProvider } from './contexts/GlobalContext';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
