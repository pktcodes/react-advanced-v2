import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });

  const displayPerson = () => {
    // setPerson({ name: 'john', age: 30, hobby: 'scream at computer' });
    // setPerson('developer');
    // setPerson({ job: 'developer' });
    setPerson({ ...person, name: 'susan' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>enjoys to: {person.hobby}</h3>
      <button
        type="button"
        className="btn"
        style={{ marginTop: '1.5rem' }}
        onClick={displayPerson}
      >
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
