import React from "react";
import Pokemon from "./Pokemon";

export default function PokemonList({ pokemon }) {
  return (
    <div className="screen">
      {pokemon.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
