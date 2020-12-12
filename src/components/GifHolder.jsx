import React, {useEffect, useRef, useState} from 'react';
import './GifHolder.scss';

const GifHolder = (props) => {
  const {id, item} = props;
  const elRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    elRef.current.pause();
  }, []);
  const handlePlayPause = () => {
    const {current: videoElement} = elRef;
    isPlaying ? videoElement.pause() : videoElement.play();
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="player">
      <div className="control">
        <button
          className={`control-button ${isPlaying ? 'paused' : 'play'}`}
          type="button"
          onClick={handlePlayPause}
        />
      </div>
      <video
        ref={elRef}
        autoPlay
        loop
        id={id}
        src={item}
        style={{maxWidth: '200px'}}
      />
    </div>
  );
};
export default GifHolder;
