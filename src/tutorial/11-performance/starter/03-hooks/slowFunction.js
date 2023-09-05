const slowFunction = () => {
  let value = 0;

  for (let i = 0; i < 1000000000; i++) {
    value = value + i;
  }
  console.log(value);
  return value;
};

export default slowFunction;
