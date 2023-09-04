import { memo } from 'react';

import Item from './Person';
import propTypes from 'prop-types';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};

List.propTypes = {
  people: propTypes.array,
  removePerson: propTypes.func,
};

export default memo(List);
