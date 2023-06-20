import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState('read books');

  // Auto Batching- From React 18,here updating 3 states values is grouped into single update and as a result only one re-render occurs
  const displayPerson = () => {
    setName('john');
    setAge(30);
    setHobby('scream at computer');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>enjoys to: {hobby}</h3>
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
