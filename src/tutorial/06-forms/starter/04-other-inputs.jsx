import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);

  const handleShipping = (event) => {
    // console.log(event.target.checked);
    setShipping(event.target.checked);
  };

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>

        {/* name */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input type="checkbox" checked={shipping} onChange={handleShipping} />
        </div>

        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
