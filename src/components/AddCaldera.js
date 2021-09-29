import React from 'react';
import { useState } from 'react';

const AddCaldera = ({ onAdd }) => {
  const [tipo, setTipo] = useState('');
  const [estaInstalada, setEstaInstalada] = useState(false);
  const [tiempoMantenimientoMinutos, setTiempoMantenimientoMinutos] =
    useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!tipo) {
      alert('Please add a type');
      return;
    }

    onAdd({ tipo, tiempoMantenimientoMinutos, estaInstalada });

    setTipo('');
    setTiempoMantenimientoMinutos('');
    setEstaInstalada(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Boiler type</label>
        <input
          type="text"
          placeholder="Add Type"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Maintenance time</label>
        <input
          type="text"
          placeholder="Add Time in minutes"
          value={tiempoMantenimientoMinutos}
          onChange={(e) => setTiempoMantenimientoMinutos(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Is installed</label>
        <input
          type="checkbox"
          checked={estaInstalada}
          placeholder="Add Caldera"
          value={estaInstalada}
          onChange={(e) => setEstaInstalada(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Boiler" className="btn btn-block" />
    </form>
  );
};

export default AddCaldera;
