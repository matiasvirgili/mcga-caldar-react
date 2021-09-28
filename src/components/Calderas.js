import Caldera from './Caldera';

const Calderas = ({ calderas }) => {
  return (
    <>
      {calderas.map((caldera) => (
        <Caldera key={caldera.id} caldera={caldera} />
      ))}
    </>
  );
};

export default Calderas;
