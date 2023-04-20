import React from "react";
import * as S from "./assets/components/GlobalStyle";
import Navbar from "./assets/components/Navbar/Navbar";
import Header from "./assets/components/Header/Header";
import About from "./assets/components/About/About";
import Skills from "./assets/components/Skills/Skills";
import Projects from "./assets/components/Projects/Projects";
import Contact from "./assets/components/Contacts/Contacts";
import Footer from "./assets/components/Footer/Footer";

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
};
