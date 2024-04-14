import React from "react";
import Header from "./header/Header";
import NavBar from "./nav/Nav";
import About from "./about/About";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Experience from "./experience/Experience";

function App(){
    return(
        <>
        <Header/>
        <NavBar/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default App;
