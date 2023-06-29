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
    const someFunction = () => {
      console.log('Scroll Event Fires');
    };

    window.addEventListener('scroll', someFunction);

    return () => {
      window.removeEventListener('scroll', someFunction);
    };
  }, []);

  return <h2 className="alert alert-success">hello world</h2>;
};

export default CleanupFunction;
