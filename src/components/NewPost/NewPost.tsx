import React, { useContext, useState } from "react";
import { PostContext } from "../../context/PostContext";
import { PostType } from "../../context/PostContext";
import "./NewPost.scss";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const NewPost = () => {
  const { setPosts, posts } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { redirect } = useContext(UserContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      alert("Tytuł i treść nie mogą być puste");
      return;
    }

    const newPost: PostType = {
      id: posts.length + 1,
      title,
      body,
      like: false,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);

    setTitle("");
    setBody("");
  };

  if (!redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Link to="/forum" className="btn-return">
        Return to forum
      </Link>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title" className="label">
          Create new post
        </label>
        <input
          id="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bodyPost"
          placeholder="write new post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="btn-submit" type="submit">
          Save
        </button>
      </form>
    </>
  );
};
