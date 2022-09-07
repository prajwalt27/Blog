import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Settings from "./pages/sertings/Settings";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
// import Single from "./pages/single/Single";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Single from "./pages/single/Single";
//import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/register" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={user ? <Home /> : <Login />}/>
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" element={<Single />}/>
      </Routes>
      
    </Router>
    
  );

}

export default App;
