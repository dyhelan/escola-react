import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Escola from "./components/Escola";
import SobreMim from "./components/SobreMim";
import Footer from"./components/footer";
import "./index.css";

export default function App () {
  return(
    <div className="font-sans">
      <Navbar/>
      <Home/>
      <Escola/>
      <SobreMim/>
      <Footer/>
    </div>
  );
}



