import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import "./ButtonDelete.scss";

type ButtonDeleteProps = {
  postId: number;
};

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({ postId }) => {
  const { setPosts } = useContext(PostContext);

  const handleDeletePost = async (postId: number) => {
    try {
      await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "DELETE",
      });

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Błąd podczas usuwania posta:", error);
    }
  };

  return (
    <button onClick={() => handleDeletePost(postId)} className="btn-delete">
      Usuń
    </button>
  );
};
