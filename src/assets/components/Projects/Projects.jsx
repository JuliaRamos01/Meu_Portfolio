import React from "react";
import * as S from "./ProjectsStyle";
import Quadrado from "../../images/quadradoexemplo.png";
import maisblack from "../../images/+black.png";
import astronauta from "../../images/astronauta.png";
import cafena from "../../images/cafena.png";
import docelar from "../../images/docelar.png";
import gudy from "../../images/gudy.png";
import petshop from "../../images/petshop.png";

export default function Projects() {
    return (
        <S.ProjectsSection id="Projects">
            <h1>Projetos</h1>
            <S.ProjectsCardsGradeOne>
                    <S.ProjectsCardOne>
                        <h2>Portifólio Astronauta</h2>
                        <img src={astronauta}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardOne>
                    <S.ProjectsCardTwo>
                        <h2>Agência de Viagens Gudy</h2>
                        <img src={gudy}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardTwo>
            </S.ProjectsCardsGradeOne>
            <S.ProjectsCardsGradeTwo>
                    <S.ProjectsCardThree>
                        <h2>Cafena</h2>
                        <img src={cafena}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardThree>
                    <S.ProjectsCardFour>
                        <h2>DoceLar</h2>
                        <img src={docelar}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardFour>
            </S.ProjectsCardsGradeTwo>
            <S.ProjectsCardsGradeThree>
                    <S.ProjectsCardFive>
                        <h2>Petshop</h2>
                        <img src={petshop}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardFive>
                    <S.ProjectsCardSix>
                        <h2>+Black</h2>
                        <img src={maisblack}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardSix>
            </S.ProjectsCardsGradeThree>
        </S.ProjectsSection>
    );
};