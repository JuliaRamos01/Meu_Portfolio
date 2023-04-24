import React from "react";
import * as S from "./HeaderStyle";
import ImageHeader from "../../images/FotoHeader4.png";

export default function Header(){
    return(
        <S.HeaderSection>
            <S.HeaderText>
                <h1>Olá, eu sou a</h1>
                <h1>Júlia Alves</h1>
                <p>e eu sou uma Desenvolvedora Web Front-End Jr.</p>
            </S.HeaderText>
            <S.HeaderImage>
                <img src={ImageHeader} alt="Minha foto"/>
            </S.HeaderImage>
        </S.HeaderSection>
    );
};