import Caldera from './Caldera';

const Calderas = ({ calderas, onDelete }) => {
  return (
    <>
      {calderas.map((caldera) => (
        <Caldera key={caldera.id} caldera={caldera} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Calderas;
