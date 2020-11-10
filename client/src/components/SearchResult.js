import React from 'react';

const SearchResult = ({ searchResult }) => {
  return <h1>{searchResult.city.name}</h1>;
};

export default SearchResult;
