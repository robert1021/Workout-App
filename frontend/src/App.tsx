import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Profile } from "./pages/Profile";
import Tools from "./pages/Tools";
import PasswordReset from "./pages/PasswordReset";
import CssBaseline from "@mui/material/CssBaseline";
import { Excerise } from "./pages/Exercise";
import  { AddExercise } from "./pages/AddExercise";
import React from "react";

function App() {
  return (
    <div className="content">
      <CssBaseline />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/exercise" element={<Excerise />} />
        <Route path="/add-exercise" element={<AddExercise />} />
      </Routes>
    </div>
  );
}

export default App;
