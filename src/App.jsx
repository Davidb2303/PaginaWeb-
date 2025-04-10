import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NarBar";  
import Footer from "./components/Footer/Footer";
import Mision from "./components/Mision/Mision";
import Vision from "./components/Vision/Vision";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Categories from "./components/Categorias/Categories";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar /> 

        <div className="flex-grow pt-[110-px]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/mision" element={<Mision />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/category" element={<Categories/>} />
          </Routes>
        </div>

        <Footer /> 
      </Router>
    </div>
  );
};

export default App;

