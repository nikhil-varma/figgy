import {GiphyFetch} from '@giphy/js-fetch-api';

const giphyAPI = () => {
  const apiKey = 'mTP6kKnfU7FN7HZgiu7mJ7N1ET91a24y';
  const giphyFetch = new GiphyFetch(apiKey);

  const search = (props) => {
    return giphyFetch.search(props);
  };

  const trending = (props) => {
    return giphyFetch.trending(props);
  };

  return {
    search,
    trending,
  };
};

export default giphyAPI();
