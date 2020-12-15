import React, {useRef} from 'react';
import useGrid from '../utils/useGrid';

const Grid = (props) => {
  const elRef = useRef('');
  const renderGrid = useGrid({targetEl: elRef.current, ...props});
  return <div ref={elRef}>{renderGrid}</div>;
};

export default Grid;
