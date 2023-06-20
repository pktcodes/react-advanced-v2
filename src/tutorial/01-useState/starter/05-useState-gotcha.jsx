import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={handleIncrease}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
