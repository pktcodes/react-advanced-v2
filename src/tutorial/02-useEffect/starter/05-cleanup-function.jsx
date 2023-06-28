import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log('Hmm, That is Interesting.');
  }, []);

  return <h2 className="alert alert-success">hello world</h2>;
};

export default CleanupFunction;
