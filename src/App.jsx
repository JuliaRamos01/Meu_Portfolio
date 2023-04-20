import React from "react";
import * as S from "./assets/components/GlobalStyle";
import Navbar from "./assets/components/Navbar/Navbar";
import Header from "./assets/components/Header/Header";
import About from "./assets/components/About/About";
import Projects from "./assets/components/Projects/Projects";

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    </>
  );
};
