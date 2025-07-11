import React, { useState, useContext } from 'react';
import { EstudianteContext } from '../context/EstudianteContext';
const Formulario = () => {
  const { agregarEstudiante } = useContext(EstudianteContext);
  const [form, setForm] = useState({ nombre: '', email: '', carrera: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEstudiante(form);
    setForm({ nombre: '', email: '', carrera: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='inputBox' name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input className='inputBox' name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <select className='inputBox' name="carrera" value={form.carrera} onChange={handleChange} required>
        <option value="">Selecciona carrera</option>
        <option value="Economia">Economia</option>
        <option value="Medicina">Medicina</option>
        <option value="Sistema">Sistema</option>
        <option value="Informatica">Informatica</option>
        <option value="Derecho">Derecho</option>
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
