import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    // setCount(count + 1);

    setCount((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
    // console.log(count);
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
