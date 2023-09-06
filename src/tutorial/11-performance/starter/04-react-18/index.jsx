import { Suspense, lazy, useState, useTransition } from 'react';
const SlowComponent = lazy(() => import('./SlowComponent'));

const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);

    startTransition(() => {
      // slow down CPU
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };

  return (
    <section className="container">
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      {isPending ? (
        <div className="loading"></div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show Items
      </button>
      {show && (
        <Suspense
          fallback={
            <div className="loading" style={{ marginTop: '2rem' }}></div>
          }
        >
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};

export default LatestReact;
