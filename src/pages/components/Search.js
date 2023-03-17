import React, { useState } from 'react';
import { SearchBar } from '../../styles/Home';

const SmartSearchBar = ({ data, setFilteredPkmn, setFilteredIms, handleSearch }) => {
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
        placeholder={`Search ${data.length ? data.map((item) => item.name).join(', ') : ''}`}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SmartSearchBar;
