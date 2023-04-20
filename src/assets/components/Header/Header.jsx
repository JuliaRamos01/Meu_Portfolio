import React from "react";
import * as S from "./HeaderStyle";
import ImageHeader from "../../images/FotoHeader3.png";

export default function Header(){
    return(
        <S.HeaderSection>
            <S.HeaderText>
                <h1>Olá, eu sou a</h1>
                <h1>Júlia Alves</h1>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, 
                    mas ninguém vê os tombis que eu levo! Não sou faixa preta cumpadi, sou preto inteiris, 
                    inteiris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nec orci 
                    ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
            </S.HeaderText>
            <S.HeaderImage>
                <img src={ImageHeader} alt="Minha foto"/>
            </S.HeaderImage>
        </S.HeaderSection>
    );
};