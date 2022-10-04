import React,{useState} from "react";

function Buttons({video, setShowComments, showComments}){
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    function handleUpvotes(){
        setUpvotes((interalValue) => interalValue+1)
    }

    function handleDownvotes(){
        setDownvotes((interalValue) => interalValue+1)
    }

    function handleComments(){
        setShowComments(!showComments)
    }

    return( <div>
        <button onClick ={handleUpvotes}>{upvotes}👍</button>
        <button onClick ={handleDownvotes}>{downvotes}👎</button>
        <button onClick ={handleComments}>Hide Comments</button>
    </div>
    
    )
}

export default Buttons