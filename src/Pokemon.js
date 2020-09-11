import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Pokemon({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(false);
  useEffect(() => {
    // cancel token in case useEffect gets called multiple times before the request is finished. A clean slate
    let cancel;
    axios
      .get(pokemon.url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemonData(res.data);
      });
    // clean slate
    return () => cancel();
  }, [pokemon]);
  if (pokemonData) {
    return (
      <div className="pokemon">
        <img src={pokemonData.sprites.front_default} />
        <p>{pokemon.name}</p>
        <img src={pokemonData.sprites.back_default} />
      </div>
    );
  } else {
    return <div className="pokemon">{pokemon.name}</div>;
  }
}
