import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <header>
      <h1 className="header">{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.PropTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
