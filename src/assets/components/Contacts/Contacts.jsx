import React from "react";
import * as S from "./ContactsStyle";
import UnicornioContato from "../../images/unicórnio2.png";

export default function Contact(){
    return(
        <S.ContactSection>
            <S.ContactText>
                <h1>Contato</h1>
                <button>E-mail</button>
                <button>Linkedin</button>
                <button>Github</button>
            </S.ContactText>
            <S.ContactImg>
                <img src={UnicornioContato} alt="Unicórnio com o Laptop"/>
            </S.ContactImg>
        </S.ContactSection>
    );
};