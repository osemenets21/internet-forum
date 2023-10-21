import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { ButtonDelete } from "../ButtonDelete/ButtonDelete";
import { Like } from "../Like/Like";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";

export const Forum = () => {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <div>
      <h1>Forum</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

            <p>{post.body}</p>
            <Like postId={post.id} post={post} />
            <ButtonDelete postId={post.id} />
          </li>
        </ul>
      ))}
    </div>
  );
};
