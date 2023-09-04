import propTypes from 'prop-types';

const Person = ({ name, removePerson, id }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

Person.propTypes = {
  name: propTypes.string,
  removePerson: propTypes.func,
  id: propTypes.number,
};

export default Person;
