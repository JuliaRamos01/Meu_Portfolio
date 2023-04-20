import React from "react";
import * as S from "./ProjectsStyle";

export default function Projects(){
    return(
        <S.ProjectsSection>
            <S.ProjectsCards>
                <S.ProjectsCardOne>
                    <h1>Cartao1</h1>
                </S.ProjectsCardOne>
                <S.ProjectsCardTwo>
                    <h1>Cartao2</h1>
                </S.ProjectsCardTwo>
                <S.ProjectsCardThree>
                    <h1>Cartao2</h1>
                </S.ProjectsCardThree>
                <S.ProjectsCardFour>
                    <h1>Cartao2</h1>
                </S.ProjectsCardFour>
            </S.ProjectsCards>
        </S.ProjectsSection>
    );
};