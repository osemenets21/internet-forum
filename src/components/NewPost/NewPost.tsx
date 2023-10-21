import React, { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import { PostType } from '../../context/PostContext';
import './NewPost.scss';

export const NewPost = () => {
  const { setPosts } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Sprawdź, czy tytuł i treść nie są puste
    if (title.trim() === '' || body.trim() === '') {
      alert('Tytuł i treść nie mogą być puste');
      return;
    }

    // Wygeneruj nowy post z ID na podstawie aktualnej liczby postów + 1
    const newPost: PostType = {
      id: 100 + 1, // Przydziel ID na podstawie liczby postów
      title,
      body,
      like: false,
    };

    console.log(newPost);
    

    // Dodaj nowy post do kontekstu
    setPosts((prevPosts) => [...prevPosts, newPost]);

    // Wyczyść pola tytułu i treści
    setTitle('');
    setBody('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='title' className='label'>
        Create new post
      </label>
      <input
        id='title'
        type='text'
        placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className='bodyPost'
        placeholder='write new post'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button className='btn-submit' type='submit'>
        Save
      </button>
    </form>
  );
};
