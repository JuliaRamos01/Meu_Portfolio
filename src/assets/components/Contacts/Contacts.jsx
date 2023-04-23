import React from "react";
import * as S from "./ContactsStyle";
import UnicornioContato from "../../images/unicórnio2.png";

export default function Contact(){
    return(
        <S.ContactSection>
            <S.ContactText>
                <h1>Contato</h1>
                <S.ButtonEmail>E-mail</S.ButtonEmail>
                <S.ButtonLinkedin>Linkedin</S.ButtonLinkedin>
                <S.ButtonGithub>Github</S.ButtonGithub>
            </S.ContactText>
            <S.ContactImg>
                <img src={UnicornioContato} alt="Unicórnio com o Laptop"/>
            </S.ContactImg>
        </S.ContactSection>
    );
};