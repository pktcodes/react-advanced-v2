import { useEffect } from 'react';
import propTypes from 'prop-types';

const Person = ({ name }) => {
  console.log('render');
  useEffect(() => {
    console.log('unfortunately does not fix the issue');
  }, []);
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
