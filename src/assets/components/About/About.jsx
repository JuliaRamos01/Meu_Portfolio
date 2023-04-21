import React from "react";
import * as S from "./AboutStyle";
import ImagemFundo from "../../images/fundoroxo2.png";

export default function About(){
    return(
        <S.AboutSection>
            <S.AboutSectionImg>
            <img src={ImagemFundo} alt="Fundo de estrelas"/>
            </S.AboutSectionImg>
            <S.AboutText>
                <h1>Quem sou eu?</h1>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, 
                    mas ninguém vê os tombis que eu levo! Não sou faixa preta cumpadi, sou preto inteiris, 
                    inteiris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nec orci 
                    ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
            </S.AboutText>
        </S.AboutSection>
    );
};