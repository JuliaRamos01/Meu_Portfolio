import React from "react";
import * as S from "./ContactsStyle";
import UnicornioContato from "../../images/unicorniocompc.png";

export default function Contact(){
    return(
        <S.ContactSection id="Contacts">
            <S.ContactText>
                <h1>Contato</h1>
                <S.ButtonEmail><a href="mailto:developerxu@outlook.com" target="_blank">E-mail</a></S.ButtonEmail>
                <S.ButtonLinkedin> <a href="https://www.linkedin.com/in/julia-alves998/" target="_blank">Linkedin</a></S.ButtonLinkedin>
                <S.ButtonGithub><a href="https://github.com/JuliaRamos01" target="_blank">Github</a></S.ButtonGithub>
            </S.ContactText>
            <S.ContactImg>
                <img src={UnicornioContato} alt="Unicórnio com o Laptop"/>
            </S.ContactImg>
        </S.ContactSection>
    );
};