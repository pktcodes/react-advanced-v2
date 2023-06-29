import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  console.log('Render');

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

    const intId = setInterval(() => {
      console.log('Random Component');
    }, 1000);
    return () => {
      console.log('Clear Interval', intId);
      clearInterval(intId);
    };
  }, []);

  return <h2 className="alert alert-success">hello world</h2>;
};

export default CleanupFunction;
