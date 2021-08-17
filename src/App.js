import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState('');

  useEffect(() => {
    fetch('https://puff-master-default-rtdb.europe-west1.firebasedatabase.app/amount.json')
      .then((res) => res.json())
      .then((res) => setCount(parseInt(res, 10)));
  }, []);

  const handleChangeCount = async (amt) => {
    setCount(parseInt(amt, 10));
    await axios
      .put('https://puff-master-default-rtdb.europe-west1.firebasedatabase.app/amount.json', amt)
      .then((res) => console.log(res)).catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div className="header_container">
        <div className="header">Puff Master</div>
      </div>
      <div className="main">
        <div className="count">Count: {count}</div>
        <div role="button" className="button" onClick={() => handleChangeCount(count + 1)}>
          Add
        </div>
        <div role="button" className="restart" onClick={() => handleChangeCount('0')}>
          Restart
        </div>
      </div>
    </div>
  );
}

export default App;
