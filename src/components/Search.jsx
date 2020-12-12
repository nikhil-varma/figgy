import React, {useState} from 'react';
import GifHolder from './CustomGrid';

import useGifs from '../utils/useGifs';

export default function Search() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results] = useGifs(query);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          type="text"
          id="search"
          placeholder="Search for gifs"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {results.map((item) => (
        <GifHolder loop id="some" key={item} item={item} />
      ))}
    </>
  );
}
