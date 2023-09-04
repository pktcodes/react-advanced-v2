import Person from './Person';
import propTypes from 'prop-types';

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

List.propTypes = {
  people: propTypes.array,
};

export default List;
