import React, {useState} from 'react';
import {Grid} from '@giphy/react-components';
import ResizeObserver from 'react-resize-observer';

const GifGrid = (props) => {
  console.log(props);
  return <Grid {...props} />;
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
