import React, { createContext, useState } from 'react';

export const EstudianteContext = createContext();

export const EstudianteProvider = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  return (
    <EstudianteContext.Provider value={{ estudiantes, agregarEstudiante }}>
      {children}
    </EstudianteContext.Provider>
  );
};
