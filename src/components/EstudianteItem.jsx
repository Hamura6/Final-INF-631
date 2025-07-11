import React from 'react';

const EstudianteItem = ({ estudiante }) => {
  return (
    <>
      <tr>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.email}</td>
              <td>{estudiante.carrera}</td>
      </tr>
    </>
  );
};

export default EstudianteItem;
