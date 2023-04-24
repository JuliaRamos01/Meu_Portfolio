import React from "react";
import * as S from "./AboutStyle";
import ImagemFundo from "../../images/fundoroxo2.png";

export default function About(){
    return(
        <S.AboutSection id="About">
            <S.AboutSectionImg>
            <img src={ImagemFundo} alt="Fundo de estrelas"/>
            </S.AboutSectionImg>
            <S.AboutText>
                <h1>Quem sou eu?</h1>
                <p>Após atuar 8 anos dentro da educação básica como professora
                    (em escolas públicas e particulares, com projetos de ensino, pesquisa e extensão), 
                    decidi abraçar a minha grande ambição: atuar dentro da área de tecnologia. 
                    O pontapé inicial deste feito se deu a partir do momento que assumi o posto de bolsista 
                    de iniciação científica na área de Desenvolvimento de Games, em 2020, através do projeto 
                    +Casas da Inovação, oferecido pela UFRRJ. Depois dessa experiência, busquei me aperfeiçoar
                    na área de Desenvolvimento Web durante a época da pandemia e realizei alguns cursos online 
                    voltados para a área referida. Acredito que tanto a tecnologia em geral como as páginas
                    web, assim como a linguagem humana, existem para uma coisa: divulgar a nossa identidade e deixar
                    nossa marca dentro da sociedade.</p>
            </S.AboutText>
        </S.AboutSection>
    );
};