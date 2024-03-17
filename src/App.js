// import logo from "./logo.svg";
// import "./App.css";
// import { useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { addtodo } from "./slices/todos";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Hooks } from "./components/Hooks";
import { counterContext } from "./context/context";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/hooks" element={<Hooks/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;
