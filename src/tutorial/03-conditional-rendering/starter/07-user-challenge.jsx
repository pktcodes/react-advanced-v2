import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // In Real time, Connect to DB through API to get data of the user, otherwise error
    setUser({ name: 'john' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button type="button" className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </>
  );

  /* My Solution
  return (
    <div>
      <h4>{user ? `hello there, ${user.name}` : 'please login'}</h4>
      <button type="button" className="btn" onClick={user ? logout : login}>
        {user ? 'logout' : 'login'}
      </button>
    </div>
  ); 
  */
};

export default UserChallenge;
