import { useState, useEffect } from 'react';
import Header from './components/Header';
import Calderas from './components/Calderas';
import AddCaldera from './components/AddCaldera';

function App() {
  const [showAddCaldera, setShowAddCaldera] = useState(false);
  const [calderas, setCalderas] = useState([]);
  useEffect(() => {
    const getCalderas = async () => {
      const calderasFromServer = await fetchCalderas();
      setCalderas(calderasFromServer);
    };
    getCalderas();
  }, []);

  // Fetch calderas
  const fetchCalderas = async () => {
    const res = await fetch('http://localhost:3000/Boilers');
    const data = await res.json();
    return data;
  };

  // Add caldera
  const addCaldera = (caldera) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newCaldera = { id, ...caldera };
    setCalderas([...calderas, newCaldera]);
  };

  // Delete caldera
  const deleteCaldera = (id) => {
    setCalderas(calderas.filter((caldera) => caldera.id !== id));
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddCaldera(!showAddCaldera)}
        showAdd={showAddCaldera}
      />
      {showAddCaldera && <AddCaldera onAdd={addCaldera} />}
      {calderas.length > 0 ? (
        <Calderas calderas={calderas} onDelete={deleteCaldera} />
      ) : (
        'No Boilers To Show'
      )}
    </div>
  );
}

export default App;
