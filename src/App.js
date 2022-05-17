import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Comment from "./pages/comment/Comment";

function App() {
  const [username, setUsername] = useState('')
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} username={username} />
          <Route path="/signin" element={<Login />} setUsername={setUsername} username={username}  />
          <Route path="/profile" element={<Profile />} username={username} />
          <Route path="/signup" element={<Register />} />
          <Route path="/comments" element={<Comment />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
