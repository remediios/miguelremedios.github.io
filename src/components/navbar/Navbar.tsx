import React from 'react';

const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(darkMode, setDarkMode);

  return <div></div>;
};

export default Navbar;
