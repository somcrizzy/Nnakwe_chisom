import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
