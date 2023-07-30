import { useState } from 'react';

import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) return;

    const fakeId = Date.now();
    console.log(fakeId);
    const newUser = { id: fakeId, name: name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    setName('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {users.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </div>
  );
};
export default UserChallenge;
