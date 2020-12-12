import {useEffect, useState} from 'react';

export default function useGifs(query, endpoint = 'search') {
  const baseURL = 'https://api.giphy.com/v1/';
  const apiKey = 'mTP6kKnfU7FN7HZgiu7mJ7N1ET91a24y';
  const uri = `${baseURL}gifs/${endpoint}?api_key=${apiKey}&limit=25&offset=0`;
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(`${uri}&q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        setResults(res.data.map((gif) => gif.images.preview.mp4));
      });
  }, [query]);

  return [results];
}
