import React, {useState} from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import CommentList from "./CommentList.js";

function App() {
  const [showComments,setShowComments] = useState(true)
  return (
    <div className="App">
        <VideoInfo video={video} setShowComments={setShowComments} showComments={showComments}/>
        <CommentList comments ={video.comments} showComments={showComments} />
    </div>
  );
}

export default App;
