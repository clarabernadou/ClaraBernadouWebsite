import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  useEffect(() => {
    console.log("slt");
  }, []);

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}>
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
  );
}

export default App;
