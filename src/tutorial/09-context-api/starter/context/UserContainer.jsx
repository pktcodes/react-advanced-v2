import propTypes from 'prop-types';

import { useContext } from 'react';
import { NavbarContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <button className="btn">please login</button>
      )}
    </div>
  );
};

UserContainer.propTypes = {
  user: propTypes.object,
  logout: propTypes.func,
};

export default UserContainer;
