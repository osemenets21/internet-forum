import React, { createContext, useContext, useEffect, useState } from "react";

export type PostType = {
  id: number;
  title: string;
  body: string;
  like: boolean;
};

type Props = {
  children: JSX.Element;
};

export type PostContextType = {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  post: PostType | null;
  setPost: React.Dispatch<React.SetStateAction<PostType | null>>;
  getSinglePost: (id: number) => Promise<void>;
};

export const PostContext = createContext<PostContextType>(
  {} as PostContextType
);

export const PostContextProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [post, setPost] = useState<PostType | null>(null);

  const getPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) throw new Error(`Can't get posts from the server`);

      const { posts } = await response.json();

      const postsWithLike = posts.map((post: PostType) => ({
        ...post,
        like: false,
      }));

      setPosts(postsWithLike);
    } catch (error) {
      console.error(error);
    }
  };

  const getSinglePost = async (id: number) => {
    if (id <= 100) {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        if (!response.ok) throw new Error(`Can't get posts from the server`);

        const singlePost = await response.json();

        const postWithLike = {
          ...singlePost,
          like: false,
        };

        setPost(postWithLike);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, setPosts, post, setPost, getSinglePost }}
    >
      {children}
    </PostContext.Provider>
  );
};
