import React, {useState} from 'react';
import {Grid} from '@giphy/react-components';
import {GiphyFetch} from '@giphy/js-fetch-api';
import ResizeObserver from 'react-resize-observer';

const giphyFetch = new GiphyFetch('mTP6kKnfU7FN7HZgiu7mJ7N1ET91a24y');

const GifGrid = (props) => {
  const fetchGifs = (offset) => giphyFetch.trending({offset, limit: 5});
  const {onGifClick, width} = props;
  return (
    <Grid
      onGifClick={onGifClick}
      fetchGifs={fetchGifs}
      width={width}
      columns={3}
      gutter={6}
    />
  );
};

const withResizer = (WrappedComponent) => (props) => {
  const [width, setWidth] = useState();
  return (
    <>
      <WrappedComponent {...props} width={width} />
      <ResizeObserver
        onResize={({width: availableWidth}) => setWidth(availableWidth)}
      />
    </>
  );
};

const GridView = withResizer(GifGrid);

export {GridView as GifGrid};
