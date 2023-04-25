import React from "react";
import * as S from "./NavbarStyle";
import Estrela from "../../images/estrela5.png";

export default function Navbar() {
    return (
        <S.NavbarSection>
            <S.NavbarBox>
                <S.NavbarNavigation>
                    <img src={Estrela} alt="Estrela"/>
                    <h1>Portfólio - Júlia Alves</h1>
                    <img src={Estrela} alt="Estrela"/>
                    <ul>
                        <li><a href="#Header">Início</a></li>
                        <li><a href="#About">Sobre</a></li>
                        <li><a href="#Skills">Habilidades</a></li>
                        <li><a href="#Projects">Projetos</a></li>
                        <li><a href="#Contacts">Contatos</a></li>
                    </ul>
                </S.NavbarNavigation>
            </S.NavbarBox>
        </S.NavbarSection>
    );
};