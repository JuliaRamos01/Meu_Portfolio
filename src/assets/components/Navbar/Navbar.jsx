import React from "react";
import * as S from "./NavbarStyle";
import Estrela from "../../images/estrela5.png";

export default function Navbar() {
    return (
        <S.NavbarSection>
            <S.NavbarBox>
                <S.NavbarNavigation>
                    <img src={Estrela} alt="Estrela"/>
                    <h1>Portifólio - Júlia Alves</h1>
                    <img src={Estrela} alt="Estrela"/>
                    <ul>
                        <li>Início</li>
                        <li>Sobre</li>
                        <li>Projetos</li>
                        <li>Contatos</li>
                    </ul>
                </S.NavbarNavigation>
            </S.NavbarBox>
        </S.NavbarSection>
    );
};