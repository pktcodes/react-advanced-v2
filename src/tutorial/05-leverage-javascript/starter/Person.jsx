const Person = ({ name, nickName, images }) => {
  const img = images[0].small.url;

  return (
    <article>
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <h5>Nickname: {nickName}</h5>
    </article>
  );
};

export default Person;
