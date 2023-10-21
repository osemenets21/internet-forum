import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

type PostId = {
    postId: number; // Popraw typ właściwości na 'postId'
    post: any;
  };

export const Like = ( { postId, post }: PostId) => {
  const { posts, setPosts } = useContext(PostContext);

  const changeLikeHandler = (id: number) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, like: !post.like };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <span onClick={() => changeLikeHandler(postId)}>
      {post.like ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </span>
  );
};
