import { useState } from 'react';

const ShortCircuitOverview = () => {
  // Falsy
  const [text, setText] = useState('');
  // Truthy
  const [name, setName] = useState('Peter');

  const codeExample = text || 'Hello World';

  return (
    <>
      <h4> Falsy OR: {text || 'Hello World'}</h4>
      <h4>Falsy AND: {text && 'Hello World'}</h4>
      <h4>Truthy OR: {name || 'Hello World'}</h4>
      <h4>Truthy AND: {name && 'Hello World'}</h4>
      {codeExample}
    </>
  );
};
export default ShortCircuitOverview;
