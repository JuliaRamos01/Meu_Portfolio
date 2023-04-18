import React from "react";
import * as S from "./NavbarStyle";

export default function Navbar() {
    return (
        <S.NavbarSection>
            <S.NavbarNavigation>
                <ul>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </S.NavbarNavigation>
        </S.NavbarSection>
    );
};