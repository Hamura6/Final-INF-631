import React from 'react';
import { EstudianteProvider } from './context/EstudianteContext';
import Home from './pages/Home';
import Header from './components/Header';
import './style.css';

const App = () => {
  return (
    <EstudianteProvider>
      <Header />
      <Home />
    </EstudianteProvider>
  );
};

export default App;
