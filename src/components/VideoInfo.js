import React from "react";
import Buttons from "./Buttons";

function VideoInfo({ video, setShowComments, showComments }) {
    return <div className="video">
        <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded At {video.createdAt}</p>
        <Buttons video={video} setShowComments={setShowComments}  showComments= {showComments}/>
    </div>

}

export default VideoInfo