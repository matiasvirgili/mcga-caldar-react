const Caldera = ({ caldera }) => {
  return (
    <div className="caldera">
      <h3>{caldera.tipo}</h3>
      <p> Instalada: {caldera.estaInstalada}</p>
    </div>
  );
};

export default Caldera;
