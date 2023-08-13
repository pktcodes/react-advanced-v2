import propTypes from 'prop-types';

const UserContainer = ({ user, logout }) => {
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
