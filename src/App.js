import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Escola from "./components/Escola";
import SobreMim from "./components/SobreMim";
import "./index.css";

export default function App(){
  return(
    <div className="front-sans">
      <NavBar/>
      <Home/>
      <Escola/>
      <SobreMim/>
    </div>
  )
}