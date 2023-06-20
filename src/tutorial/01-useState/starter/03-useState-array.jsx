import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  const handleRemoveItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    // setPeople(people.filter((person) => person.id !== id));
  };

  const handleClearItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <article key={id} style={{ margin: '1rem' }}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => {
                handleRemoveItem(id);
              }}
            >
              Remove
            </button>
          </article>
        );
      })}

      <button
        type="button"
        className="btn"
        style={{ background: 'red', width: '10rem', marginTop: '2rem' }}
        onClick={handleClearItems}
      >
        clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
