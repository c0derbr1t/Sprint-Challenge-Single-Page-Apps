import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm({characters}) {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = characters.filter(char => 
      char.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
 
  return (
    <section className="search-form">
      <input
        type='text'
        placeholder='Search By Name'
        value={searchTerm}
        onChange={handleChange}
      />
      {searchResults.map(item => (
        <CharacterCard key={item.id} character={item} />
      ))}
    </section>
  );
}
