import React, {useEffect} from 'react';
import {renderGrid} from '@giphy/js-components';
import {throttle} from 'lodash';

const GifGrid = (props) => {
  const {width, fetchGifs, columns, gutter, user, ref} = props;
  const throttledRender = throttle(
    renderGrid({width, fetchGifs, columns, gutter, user}, ref),
    500
  );
  useEffect(() => {
    window.addEventListener('resize', throttledRender, false);
    return function cleanup() {
      window.removeEventListener('resize', throttledRender);
    };
  }, []);

  return (
    <>
      <div id="grid">some</div>
    </>
  );
};

export default GifGrid;
