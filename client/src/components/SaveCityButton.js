import React from 'react';

const SaveCityButton = ({ city, setCityList }) => {
  return (
    <button
      className="waves-effect waves-light btn"
      onClick={() => {
        setCityList((old) => [...old, city]);
      }}
    >
      Save City
    </button>
  );
};

export default SaveCityButton;
