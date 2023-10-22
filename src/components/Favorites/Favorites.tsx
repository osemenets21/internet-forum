import React, { useContext } from "react";
import "./Favorites.scss";
import { PostContext, PostType } from "../../context/PostContext";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Favorites = () => {
  const { posts } = useContext(PostContext);
  const { redirect } = useContext(UserContext);

  const favoritePosts = posts.filter((post) => post.like === true);

  if (!redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="favorites-container">
      <Link className="btn-forum-2" to="/forum">
        Return to forum
      </Link>
      {favoritePosts.map((post: PostType) => (
        <div key={post.id} className="post-container">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
