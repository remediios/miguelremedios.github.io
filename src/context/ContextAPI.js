import React, { createContext, useState } from "react";

export const ContextAPI = createContext();

export function ContextProvider({ children }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <ContextAPI.Provider
      value={{
        enabled,
        setEnabled,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
}
