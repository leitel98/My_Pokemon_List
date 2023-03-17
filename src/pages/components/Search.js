import React, { useState } from 'react';
import { SearchBar } from '../../styles/Home';

const SmartSearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div>
      <SearchBar
        type="text"
        placeholder={`Search pokemons`}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SmartSearchBar;
