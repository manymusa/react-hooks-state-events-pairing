import React from "react";

function Comment({userName, post}){
    return (
        <div>
            <h1>{userName}</h1>
            <p>{post}</p>
        </div>
    )
}

export default Comment