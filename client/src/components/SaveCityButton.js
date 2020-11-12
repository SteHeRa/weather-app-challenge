import React from 'react';

const SaveCityButton = ({ city, setCityList }) => {
  return (
    <button
      className="col s3 m4 offset-s4 offset-m4 waves-effect waves-light btn"
      onClick={() => {
        setCityList((old) => [...old, city]);
      }}
    >
      Save City
    </button>
  );
};

export default SaveCityButton;
