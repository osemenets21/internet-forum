import React, { useContext, useEffect, useState } from "react";
import { PostContext, PostType } from "../../context/PostContext";
import { useParams } from "react-router-dom";


export const Post = () => {
  const { post, getSinglePost } = useContext(PostContext);

 
  const { id } = useParams()

  useEffect(() => {
    if (id) {
        getSinglePost(Number(id))
    }
    
  }, [id])

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>Brak danych o poście.</div>
      )}
    </div>
  );
};
