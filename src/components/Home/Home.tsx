import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { PostContext } from "../../context/PostContext";
import { Link } from "react-router-dom";
import "./Home.scss";

export const Home = () => {
  const { users } = useContext(UserContext);
  const { posts } = useContext(PostContext);
  const { redirect } = useContext(UserContext);

  return users.length > 0 ? (
    <>
      <div className="home-container">
        <div className="btn-wrapper">
          {!redirect && (
            <Link to="/login" className="btn-login">
              Log In
            </Link>
          )}
        </div>

        <h1>Witamy na forum internetowym</h1>
        <div className="info">Liczba userów - {users.length}</div>
        <div className="info">Liczba postów - {posts.length}</div>
        <Link to="/forum">
          <button className="btn-forum">Forum</button>
        </Link>
      </div>
    </>
  ) : (
    <div className="loading">Loading...</div>
  );
};
