import styled from "styled-components";

export const AboutSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 60vh;
/* border: red 3px solid; */
background-color: #b26bcc;

`;

export const AboutText = styled.div`
display: flex;
flex-direction: column;
text-align: center;
height: 55vh;
width: 50vw;
/* border: white 2px solid; */

h1{
    font-family: 'Alfa Slab One', cursive;
    color: #FDC500;
    font-weight: 100;
    font-size: 3rem;
}
p{
    font-size: 1.2rem;
    text-align: justify;
    font-family: 'Open Sans', sans-serif;
    color: white;
}
`;