import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => {
    useEffect(() => {
      M.AutoInit();
    }, []);

    return (
      <div className="input-field col s12">
        <select
          id={id}
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={options.length === 0}
        >
          {options.map((item, index) => (
            <option key={item} value={index}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
