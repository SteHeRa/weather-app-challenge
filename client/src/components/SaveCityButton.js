import React from 'react';

const SaveCityButton = ({ saveCity }) => {
  return (
    <button
      className="col s3 m4 offset-s4 offset-m4 waves-effect waves-light btn"
      onClick={saveCity}
    >
      Save City
    </button>
  );
};

export default SaveCityButton;
