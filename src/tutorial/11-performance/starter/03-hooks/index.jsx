import { useCallback, useMemo, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from './slowFunction';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);

  console.log(value);

  // const value = useMemo(() => {
  //   return slowFunction();
  // }, []);

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section className="container">
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} s />
    </section>
  );
};
export default LowerState;
