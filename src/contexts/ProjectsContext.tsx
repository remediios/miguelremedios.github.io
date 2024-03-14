import React, { createContext, useContext, useState, ReactNode } from 'react';

type Member = {
  name: string;
  img: string;
  github: string;
  linkedin: string;
};

type OpenModalType = {
  state: boolean;
  project: ProjectProps | null;
};

//Interface also used inside ProjectCard
export interface ProjectProps {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo?: string;
  member?: Array<Member>;
}

interface ProjectContextProps {
  openModal: OpenModalType;
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalType>>;
}

const ProjectsContext = createContext<ProjectContextProps | undefined>(
  undefined
);

const ProjectsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openModal, setOpenModal] = useState<OpenModalType>({
    state: false,
    project: null,
  });

  const contextValue: ProjectContextProps = {
    openModal,
    setOpenModal,
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      'useProjectsContext must be used within a ProjectsProvider'
    );
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ProjectsProvider, useProjectsContext };
