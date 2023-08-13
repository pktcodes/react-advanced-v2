import propTypes from 'prop-types';

import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useAppContext();
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
