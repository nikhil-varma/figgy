import {useEffect, useState} from 'react';
import giphy from './api';

export default function useGifs(query, endpoint) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    giphy[endpoint]
      .then((res) => res.json())
      .then((res) => {
        setResults(res.data.map((gif) => gif.images.preview.mp4));
      });
  }, [query]);

  return [results];
}

export const useGiphyWithSearch = (query) => useGifs(query, 'search');
export const useGiphyWithTrending = () => useGifs('', 'search');
