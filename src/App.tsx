import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import { Button } from './components/ui/button';
import { darkTheme, lightTheme } from './utils/themes';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Button>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
