import { FaTimes } from 'react-icons/fa';

const Caldera = ({ caldera, onDelete }) => {
  return (
    <div className="caldera">
      <h3>
        Boiler type: {caldera.tipo}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(caldera.id)}
        />
      </h3>
      <p>Maintenance time: {caldera.tiempoMantenimientoMinutos} min</p>
      <p>Is installed: {caldera.estaInstalada}</p>
    </div>
  );
};

export default Caldera;
