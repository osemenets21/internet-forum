import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { PostContext } from "../../context/PostContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { users } = useContext(UserContext);
  const { posts } = useContext(PostContext);

  return users.length > 0 ? (
    <div>
      <h1>Witamy na forum internetowym</h1>
      <div>Liczba userów - {users.length}</div>
      <div> Liczba postów - {posts.length}</div>
      <Link to="/forum"><button>Forum</button></Link>
      
    </div>
  ) : (
    <div>Loading...</div>
  );
};
