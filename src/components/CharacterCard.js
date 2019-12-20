import React from "react";

export default function CharacterCard({character}) {
  // console.log(character);
  return (
    <div>
      <div>
        <img src={character.image} />
      </div>
      <div>
        <h3>{character.name}</h3>
        <h4>{character.status}</h4>
        <h4>{character.species}</h4>
      </div>
    </div>
  );
}
