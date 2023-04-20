import styled from "styled-components";

export const FooterMain = styled.div`
display: flex;
height: 15vh;
/* border: red 2px solid; */
justify-content: center;
align-items: end;
background-color: #ffe5ec;
`;

export const FooterSection = styled.div`
height: 20vh;
background: rgba( 102, 0, 153, 0.5 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1px );
-webkit-backdrop-filter: blur( 1px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-top-right-radius: 2rem;
border-top-left-radius: 2rem;
height: 9vh;
width: 40vw;
display: flex;
align-items: center;
justify-content: center;

h1{
    list-style: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    :hover{
        color: #F9D402;
    }
}
`;