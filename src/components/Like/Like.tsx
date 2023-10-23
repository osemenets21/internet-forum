import React, { useContext, useState } from "react";
import { PostContext } from "../../context/PostContext";
import {
  IoMdHeart,
  IoMdHeartEmpty,
  IoMdThumbsUp,
  IoMdThumbsDown,
} from "react-icons/io";

type PostId = {
  postId: number;
  post: any;
};

export const Like = ({ postId, post }: PostId) => {
  const { posts, setPosts } = useContext(PostContext);
  const [active, setActive] = useState<string | null>(null);

  const changeLikeHandler = (id: number) => {
    const updatedPosts = posts.map((p) =>
      p.id === id ? { ...p, like: !post.like } : p,
    );

    setPosts(updatedPosts);
  };

  const handleClick = (type: string) => {
    if (active === type) {
      setActive(null);
    } else {
      setActive(type);
    }
  };

  return (
    <>
      <span onClick={() => changeLikeHandler(postId)}>
        {post.like ? (
          <IoMdHeart color="red" size="23px" />
        ) : (
          <IoMdHeartEmpty size="23px" />
        )}
      </span>
      <span>
        <IoMdThumbsUp
          size="23px"
          color={active === "thumbsUp" ? "orange" : "black"}
          onClick={() => handleClick("thumbsUp")}
        />
        <IoMdThumbsDown
          size="23px"
          color={active === "thumbsDown" ? "orange" : "black"}
          onClick={() => handleClick("thumbsDown")}
        />
      </span>
    </>
  );
};
