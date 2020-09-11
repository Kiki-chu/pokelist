import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pages from "./Pages";
// Axios is a library that allows for easier use fetch requests
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // cancel token in case useEffect gets called multiple times before the request is finished. A clean slate
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results);
      });
    // clean slate
    return () => cancel();
  }, [currentPageUrl]);

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...!";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pages
        gotoNextPage={nextPageUrl ? nextPage : null}
        // only if there is a previous page
        gotoPrevPage={prevPageUrl ? prevPage : null}
      />
    </>
  );
}

export default App;
