import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "bootstrap/dist/css/bootstrap.min.css";

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="main">
      {stream && (
        <div className="videoPlayer bg">
          <h5>{name || "name"}</h5>
          <video
            className="videoPlayer__video"
            playsInline
            ref={myVideo}
            autoPlay
          />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className=" videoPlayer bg">
          <h5>{call.name}</h5>
          <video
            className="videoPlayer__video"
            playsInline
            ref={userVideo}
            autoPlay
          />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
