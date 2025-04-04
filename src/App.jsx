import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NarBar";  
import Footer from "./components/Footer/Footer";
import Mision from "./components/Mision/Mision";
import Vision from "./components/Vision/Vision";
import Home from "./components/Home/Home";
import Count from "./components/Contador/Count";

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
          </Routes>
        </div>
        <Count/>

        <Footer /> 
      </Router>
    </div>
  );
};

export default App;

