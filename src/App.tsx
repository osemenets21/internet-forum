import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Post } from "./components/Post/Post";
import { NotFound } from "./components/NotFound/NotFound";
import { Login } from "./components/Login/Login";
import { Forum } from "./components/Forum/Forum";
import { NewPost } from "./components/NewPost/NewPost";
import { Favorites } from "./components/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
