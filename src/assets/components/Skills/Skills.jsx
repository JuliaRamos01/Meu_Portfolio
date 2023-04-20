import React from "react";
import * as S from "./SkillsStyle";
import UnicornioSkills from "../../images/unicornio1.png";

export default function Skills() {
    return (
        <S.SkillsSection>
            <S.SkillImg>
                <img src={UnicornioSkills} alt="Unicórnio com estrela" />
            </S.SkillImg>
            <S.SkillsTitle>
                    <h1>Habilidades</h1>
            </S.SkillsTitle>
            <S.SkillsButtons>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
                <button>Teste</button>
            </S.SkillsButtons>
        </S.SkillsSection>
    );
};