import Caldera from './Caldera';

const Calderas = ({ calderas, onDelete }) => {
  return (
    <>
      {calderas.map((caldera, index) => (
        <Caldera key={index} caldera={caldera} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Calderas;
