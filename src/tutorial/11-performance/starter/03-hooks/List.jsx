import { memo } from 'react';

import Item from './Person';
import propTypes from 'prop-types';

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
};

List.propTypes = {
  people: propTypes.array,
};

export default memo(List);
