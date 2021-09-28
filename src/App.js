import { useState } from 'react';
import Header from './components/Header';
import Calderas from './components/Calderas';

function App() {
  const [calderas, setCalderas] = useState([
    {
      id: 1,
      tipo: 'A',
      estaInstalada: true,
      tiempoMantenimientoMinutos: 120,
      edificioId: 444,
    },
    {
      id: 2,
      tipo: 'B',
      estaInstalada: true,
      tiempoMantenimientoMinutos: 120,
      edificioId: 4443,
    },
    {
      id: 3,
      tipo: 'C',
      estaInstalada: true,
      tiempoMantenimientoMinutos: 120,
      edificioId: 4445,
    },
    {
      id: 4,
      tipo: 'A',
      estaInstalada: true,
      tiempoMantenimientoMinutos: 120,
      edificioId: 4446,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Calderas calderas={calderas} />
    </div>
  );
}

export default App;
