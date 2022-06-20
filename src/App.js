import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PasswordReset from "./pages/PasswordReset";
import CssBaseline from '@mui/material/CssBaseline';


function App() {

  return (
    <div className="content">
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset" element={<PasswordReset />}/>
        
      </Routes>
    </div>
  );
}

export default App;
