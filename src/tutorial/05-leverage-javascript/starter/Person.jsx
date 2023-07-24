import PropTypes from 'prop-types';

import avatar from '../../../assets/default-avatar.svg';

const Person = ({ name, nickName = 'Default Nickname', images }) => {
  /* Prior to Optional Chaining */
  // const img = images && images[0] && images[0].small && images[0].small.url;

  // const img = images?.[0]?.small?.url || avatar;

  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <article>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName || 'No Nickname'}</p>
    </article>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  nickName: PropTypes.string,
  images: PropTypes.array,
};

export default Person;
