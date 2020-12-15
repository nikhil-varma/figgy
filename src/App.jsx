import React, {useState, useEffect} from 'react';
// import {debounce} from 'lodash';

import {GifGrid} from './components/GifGrid';

import giphyAPI from './utils/api';

export default function App() {
  const [term, setTerm] = useState('');
  const [fetchGifs, setFetchGifs] = useState('');

  useEffect(() => {
    setFetchGifs((offset) => giphyAPI.search(term, {offset, limit: 25}));
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setTerm(query);
    setFetchGifs((offset) => giphyAPI.search(query, {offset, limit: 25}));
  };
  // const debouncedInputHandler = (e) => debounce(handleInputChange(e), 500);

  return (
    <>
      <input
        onChange={handleInputChange}
        placeholder="type to search"
        style={{
          margin: 10,
        }}
        value={term}
      />
      <GifGrid
        width={window.innerWidth}
        innerWidth={window.innerWidth}
        fetchGifs={fetchGifs}
      />
    </>
  );
}
