import propTypes from 'prop-types';

const Person = ({ name }) => {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

Person.propTypes = {
  name: propTypes.string,
};

export default Person;
