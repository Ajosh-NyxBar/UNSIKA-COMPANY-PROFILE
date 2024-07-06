import "./videoplayer.css";
import React, { useRef } from "react";
import video from "../../assets/unsika.mp4";
const Videoplayer = ({ playState, setPlayState }) => {
  const VideoplayerClass = playState ? "videoplayer" : "videoplayer hide";

  const player = useRef(null);

  const closedPlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div className={VideoplayerClass} ref={player} onClick={closedPlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Videoplayer;
