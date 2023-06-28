import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        Toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <h2 className="alert alert-danger">hello world</h2>;
};

export default ToggleChallenge;
