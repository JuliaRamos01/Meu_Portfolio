import styled from "styled-components";

export const FooterMain = styled.div`
display: flex;
height: 15vh;
/* border: red 2px solid; */
justify-content: center;
align-items: end;
background-color:#1A1423;
`;

export const FooterSection = styled.div`
height: 20vh;
background-color:#3A0057;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
border-top-right-radius: 2rem;
border-top-left-radius: 2rem;
border-bottom: none;
height: 9vh;
width: 40vw;
display: flex;
align-items: center;
justify-content: center;
@media (min-width: 350px) and (max-width: 500px) {
    width: 65vw;
    }

h1{
    list-style: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    font-family: 'Concert One', cursive;
    font-weight: 100;
    @media (min-width: 350px) and (max-width: 500px) {
    font-size: 1rem;
    }
    :hover{
        color: #F9D402;
    }
}
`;