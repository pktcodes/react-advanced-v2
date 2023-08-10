import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  /*   No need of dependency array, since using useRef 
  prevents infinite loop which is opposite to useState */
  useEffect(() => {
    refContainer.current.focus();
  });

  // Runs After Initial Render
  useEffect(() => {
    // console.log('Inside useEffect', refContainer);

    // Here, we are prevent log on initial render
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('Re-render');
  }, [value]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
