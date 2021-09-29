import { useState } from 'react';
import Header from './components/Header';
import Calderas from './components/Calderas';
import AddCaldera from './components/AddCaldera';

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

  // Delete caldera
  const deleteCaldera = (id) => {
    setCalderas(calderas.filter((caldera) => caldera.id !== id));
  };
  return (
    <div className="container">
      <Header />
      <AddCaldera />
      {calderas.length > 0 ? (
        <Calderas calderas={calderas} onDelete={deleteCaldera} />
      ) : (
        'No Calderas To Show'
      )}
    </div>
  );
}

export default App;
