import React from 'react'
import Comment from './Comment'

function CommentList({comments, showComments}){
    const commentsRendered = comments.map((c, showComments)=> {
            return <Comment key = {c.id} userName = {c.user} post = {c.comment}/>
    })
    return (
        <div>
          <h1>{comments.length} Comments</h1>
            {showComments ? commentsRendered : null}
        </div>

    )
}

export default CommentList