import { FaTimes } from 'react-icons/fa';

const Caldera = ({ caldera, onDelete }) => {
  return (
    <div className="caldera">
      <h3>
        Tipo de caldera: {caldera.tipo}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(caldera.id)}
        />
      </h3>
      <p>Tiempo de mantenimiento: {caldera.tiempoMantenimientoMinutos} min</p>
      <p>Esta instalada: {caldera.estaInstalada}</p>
    </div>
  );
};

export default Caldera;
