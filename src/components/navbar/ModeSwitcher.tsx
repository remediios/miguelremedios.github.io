import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ModeSwitcher = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {darkMode ? (
        <BsSunFill
          style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }}
          onClick={() => {
            setDarkMode(false);
          }}
        />
      ) : (
        <BsMoonFill
          style={{ color: 'black', fontSize: '20px', cursor: 'pointer' }}
          onClick={() => {
            setDarkMode(true);
          }}
        />
      )}
    </>
  );
};

export default ModeSwitcher;
