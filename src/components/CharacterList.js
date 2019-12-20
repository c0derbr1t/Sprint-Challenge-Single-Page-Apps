import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Error with Character List call: ", error);
        });
    }

    getCharacters();
  }, []);
console.log(characters);

  return (
    <section className="character-list">
      <SearchForm characters={characters}/>
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </section>
  );
}
