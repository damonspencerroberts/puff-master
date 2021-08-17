import Main from './container/main';
import { useState } from 'react';

function App() {
  const [isMain, setIsMain] = useState(true);
  return (
    <div className="App">
      {isMain ? (
        <Main desc="amount" name="Go to other" color="#61DFAF" onChange={() => setIsMain(false)} />
      ) : (
        <Main desc="amount_2" name="Go to main" color="#E36464" onChange={() => setIsMain(true)} />
      )}
    </div>
  );
}

export default App;
