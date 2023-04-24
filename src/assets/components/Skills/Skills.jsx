import React from "react";
import * as S from "./SkillsStyle";
import UnicornioSkills from "../../images/unicorniocomestrela2.png";

export default function Skills() {
    return (
        <S.SkillsSection>
            <S.SkillImg>
                <img src={UnicornioSkills} alt="Unicórnio com estrela" />
            </S.SkillImg>
            <S.SkillsHabilities>
                <h1>Habilidades</h1>
                <S.SkillsButtons>
                    <S.ButtonHTML>HTML</S.ButtonHTML>
                    <S.ButtonCSS>CSS</S.ButtonCSS>
                    <S.ButtonJS>JavaScript</S.ButtonJS>
                    <S.ButtonReact>React Js</S.ButtonReact>
                    <S.ButtonBootstrap>Bootstrap</S.ButtonBootstrap>
                    <S.ButtonFigma>Figma</S.ButtonFigma>
                    <S.ButtonSaas>Saas</S.ButtonSaas>
                    <S.ButtonStyledComp>Styled-Components</S.ButtonStyledComp>
                    <S.ButtonGit>Git</S.ButtonGit>
                </S.SkillsButtons>
            </S.SkillsHabilities>
        </S.SkillsSection>
    );
};