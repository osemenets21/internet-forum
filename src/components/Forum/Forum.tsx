import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { ButtonDelete } from "../ButtonDelete/ButtonDelete";
import { Like } from "../Like/Like";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Forum.scss";

export const Forum = () => {
  const { posts } = useContext(PostContext);
  const { redirect } = useContext(UserContext);

  return (
    <div>
      <div className="header">
        <h1>Forum</h1>
        <div className="btn-wrapper">
          {redirect && (
            <Link to="/favorites" className="btn-favorites">
              Favorites
            </Link>
          )}
          {redirect && (
            <Link to="/new-post" className="btn-new-post">
              Create new post
            </Link>
          )}
          {!redirect && (
            <Link to="/login" className="btn-login">
              Log In
            </Link>
          )}
        </div>
      </div>

      {posts.map((post) => (
        <ul key={post.id}>
          <li>
            <Link to={`/post/${post.id}`} className="post-title">
              <h3>{post.title}</h3>
            </Link>

            <p className="post-text">{post.body}</p>
            {redirect && (
              <div className="action-wrapper">
                <div>
                  {" "}
                  <Like postId={post.id} post={post} />
                </div>

                <ButtonDelete postId={post.id} />
              </div>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};
