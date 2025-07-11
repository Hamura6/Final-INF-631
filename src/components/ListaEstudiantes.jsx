import React, { useContext } from 'react';
import { EstudianteContext } from '../context/EstudianteContext';
import EstudianteItem from './EstudianteItem';
const ListaEstudiantes = () => {
  const { estudiantes } = useContext(EstudianteContext);

  if (estudiantes.length === 0) {
    return <p style={{ textAlign: 'center' }}>No hay estudiantes registrados.</p>;
  }

  return (
    <div>
      <h3>Lista de Estudiantes</h3>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((e, index) => (
            <EstudianteItem key={index} estudiante={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEstudiantes;
