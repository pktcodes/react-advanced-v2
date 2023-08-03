import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);

    // const email = form.get('email');

    const entries = [...form.entries()];
    const keys = [...form.keys()];
    const values = [...form.values()];
    const object = Object.fromEntries([...form.entries()]);

    setValue(value + 1);

    console.log(entries);
    console.log(keys);
    console.log(values);
    console.log(object);

    event.currentTarget.reset('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
