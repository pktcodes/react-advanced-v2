import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setTimeout(() => {
      console.log('Clicked the button');
      setValue((currentValue) => {
        return currentValue + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleIncrease}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
