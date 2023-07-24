import { GleanTest } from './GleanTest';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const Example = () => {
  /* Code Spell Checker */
  const handleChage = () => {
    console.log('Changed');
  };

  handleChage();

  return (
    <div>
      <h2>example</h2>

      {/* Test Glean */}
      <GleanTest />

      <FirstComponent />
      <SecondComponent />
    </div>
  );
};

export default Example;
