import {debounce} from 'lodash';
import {useEffect} from 'react';
import {renderGrid} from '@giphy/js-components';

const useGrid = (props) => {
  const {innerWidth, width, targetEl, fetchGifs, ...rest} = props;
  console.log(props);
  useEffect(() => {
    return function cleanup() {
      window.removeEventListener('resize');
    };
  }, []);
  const render = () => {
    return renderGrid(
      {
        width: innerWidth,
        fetchGifs,
        columns: width < 500 ? 2 : 3,
        gutter: 6,
        ...rest,
      },
      targetEl
    );
  };
  const resizeRender = debounce(render, 500);
  window.addEventListener('resize', resizeRender, false);
  const remove = render();
  return {
    remove: () => {
      remove();
      window.removeEventListener('resize', resizeRender, false);
    },
  };
};
export default useGrid;
