import propTypes from 'prop-types';

import UserContainer from './UserContainer';

const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};

NavLinks.propTypes = {
  user: propTypes.object,
  logout: propTypes.func,
};

export default NavLinks;
