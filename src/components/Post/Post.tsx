import React, { useContext, useEffect, useState } from "react";
import { PostContext, PostType } from "../../context/PostContext";
import { Link, useParams } from "react-router-dom";
import './Post.scss'

export const Post = () => {
  const { post, getSinglePost } = useContext(PostContext);

 
  const { id } = useParams()

  useEffect(() => {
    if (id) {
        getSinglePost(Number(id))
    }
    
  }, [id])

  return (
    <div className="post-container">
      {post ? (
        <>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <Link className="btn-to-forum" to="/forum">Return to forum</Link>
        </>
        
        
      ) : (
        <div className="no-data">Brak danych o poście.</div>
      )}
    </div>
  );
};
