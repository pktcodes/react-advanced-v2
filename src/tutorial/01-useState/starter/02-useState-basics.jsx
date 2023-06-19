import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState(0));

  // Accessing useState
  // const value = useState(0)[0];
  // console.log(value);

  // const useStateFunction = useState(0)[1];
  // console.log(useStateFunction);

  // Using Array Destructuring
  const [count, setCount] = useState(0);
  const [name, setName] = React.useState('hello');

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;
