import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Main({ name, desc, color, onChange }) {
  const [count, setCount] = useState('');

  useEffect(() => {
    fetch(`https://puff-master-default-rtdb.europe-west1.firebasedatabase.app/${desc}.json`)
      .then((res) => res.json())
      .then((res) => setCount(parseInt(res, 10)));
  }, [desc]);

  const handleChangeCount = async (amt) => {
    setCount(parseInt(amt, 10));
    await axios
      .put(`https://puff-master-default-rtdb.europe-west1.firebasedatabase.app/${desc}.json`, amt)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleClickChange = () => {
    onChange();
  };
  return (
    <React.Fragment>
      <div className="header_container" style={{ background: color }}>
        <div className="header">Puff Master</div>
      </div>
      <div className="main">
        <div className="name" role="button" onClick={handleClickChange}>
          {name} <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </div>
        <div className="sub">
          <div className="count">Count: {count}</div>
          <div
            role="button"
            className="button"
            onClick={() => handleChangeCount(count + 1)}
            style={{ background: color }}
          >
            Add
          </div>
          <div
            role="button"
            onClick={() => handleChangeCount(count - 1)}
          >
            Subtract
          </div>
          
        </div>
        <div role="button" className="restart" onClick={() => handleChangeCount('0')}>
          Restart
        </div>
      </div>
    </React.Fragment>
  );
}

Main.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
};

export default Main;
