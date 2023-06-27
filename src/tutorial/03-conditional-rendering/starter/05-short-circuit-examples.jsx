import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* OR */}
      <h2>{text || 'default value'}</h2>

      {/* AND - Elements*/}
      {text && (
        <div>
          <h2>Hello</h2>
          <h2>{name}</h2>
        </div>
      )}

      {/* AND - Component */}
      {user && <SomeComponent name={user.name} />}

      {/* NOT */}
      {/* {!text && (
        <div>
          <h2>Hello World</h2>
          <h2>{name}</h2>
        </div>
      )} */}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Some Component</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
