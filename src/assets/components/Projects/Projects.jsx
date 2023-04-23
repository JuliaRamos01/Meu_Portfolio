import React from "react";
import * as S from "./ProjectsStyle";
import Quadrado from "../../images/quadradoexemplo.png";

export default function Projects() {
    return (
        <S.ProjectsSection>
            <h1>Projetos</h1>
            <S.ProjectsCardsGradeOne>
                    <S.ProjectsCardOne>
                        <h2>Cartao1</h2>
                        <img src={Quadrado}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardOne>
                    <S.ProjectsCardTwo>
                        <h2>Cartao2</h2>
                        <img src={Quadrado}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardTwo>
            </S.ProjectsCardsGradeOne>
            <S.ProjectsCardsGradeTwo>
                    <S.ProjectsCardThree>
                        <h2>Cartao3</h2>
                        <img src={Quadrado}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardThree>
                    <S.ProjectsCardFour>
                        <h2>Cartao4</h2>
                        <img src={Quadrado}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardFour>
            </S.ProjectsCardsGradeTwo>
            <S.ProjectsCardsGradeThree>
                    <S.ProjectsCardFive>
                        <h2>Cartao5</h2>
                        <img src={Quadrado}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardFive>
                    <S.ProjectsCardSix>
                        <h2>Cartao6</h2>
                        <img src={Quadrado}/>
                        <button>Visualizar</button>
                    </S.ProjectsCardSix>
            </S.ProjectsCardsGradeThree>
        </S.ProjectsSection>
    );
};