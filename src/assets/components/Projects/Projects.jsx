import React from "react";
import * as S from "./ProjectsStyle";
import Quadrado from "../../images/quadradoexemplo.png";
import maisblack from "../../images/+black.png";
import astronauta from "../../images/astronauta.png";
import cafena from "../../images/cafena.png";
import docelar from "../../images/docelar.png";
import gudy from "../../images/gudy.png";
import petshop from "../../images/petshop.png";
import dellmovies from "../../images/Dellmovies.png";
import donuts from "../../images/Donuts.png";

export default function Projects() {
    return (
        <S.ProjectsSection id="Projects">
            <h1>Projetos</h1>
            <S.ProjectsCardsGradeOne>
                    <S.ProjectsCardOne>
                        <h2>Donuts</h2>
                        <img src={donuts}/>
                        <a href="https://donuts-page.vercel.app/" target="_blank">Visualizar</a>
                    </S.ProjectsCardOne>
                    <S.ProjectsCardTwo>
                        <h2>Dell Movies</h2>
                        <img src={dellmovies}/>
                        <a href="https://dell-movies2.vercel.app/" target="_blank">Visualizar</a>
                    </S.ProjectsCardTwo>
            </S.ProjectsCardsGradeOne>
            <S.ProjectsCardsGradeTwo>
                    <S.ProjectsCardThree>
                        <h2>Cafena</h2>
                        <img src={cafena}/>
                        <a href="https://website-cafena.vercel.app/#home" target="_blank">Visualizar</a>
                    </S.ProjectsCardThree>
                    <S.ProjectsCardFour>
                        <h2>Portfólio Astronauta</h2>
                        <img src={astronauta}/>
                        <a href="https://portfolio-hazel-eta-94.vercel.app/" target="_blank">Visualizar</a>
                    </S.ProjectsCardFour>
            </S.ProjectsCardsGradeTwo>
            <S.ProjectsCardsGradeThree>
                    <S.ProjectsCardFive>
                        <h2>Petshop</h2>
                        <img src={petshop}/>
                        <a href="https://juliaramos01.github.io/Site_Petshop/" target="_blank">Visualizar</a>
                    </S.ProjectsCardFive>
                    <S.ProjectsCardSix>
                        <h2>+Black</h2>
                        <img src={maisblack}/>
                        <a href="https://mais-blackpagemfuncionamento.vercel.app/" target="_blank">Visualizar</a>
                    </S.ProjectsCardSix>
            </S.ProjectsCardsGradeThree>
            <S.ProjectsCardsGradeFour>
                    <S.ProjectsCardSeven>
                        <h2>DoceLar</h2>
                        <p>Status: em construção</p>
                        <img src={docelar}/>
                        <a href="https://website-docelar.vercel.app/" target="_blank">Visualizar</a>
                    </S.ProjectsCardSeven>
                    <S.ProjectsCardEight>
                        <h2>Agência de Viagens Gudy</h2>
                        <p>Status: em construção</p>
                        <img src={gudy}/>
                        <a href="https://website-gudy.vercel.app/" target="_blank">Visualizar</a>
                    </S.ProjectsCardEight>
            </S.ProjectsCardsGradeFour>
        </S.ProjectsSection>
    );
};