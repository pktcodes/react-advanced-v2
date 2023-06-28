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

      <br />
      <hr />

      {/* Ternary Operator */}
      <h2 style={{ margin: '1.5rem 0' }}>ternary operator</h2>
      <button className="btn">{isEditing ? 'editing' : 'add'}</button>

      {user ? (
        <h4 style={{ margin: '1.5rem 0' }}>hello there, {user.name}</h4>
      ) : (
        <h4 style={{ margin: '1.5rem 0' }}>please login</h4>
      )}
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
