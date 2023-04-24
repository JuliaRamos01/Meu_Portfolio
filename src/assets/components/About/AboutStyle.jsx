import styled from "styled-components";

export const AboutSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 75vh;
/* border: red 3px solid; */
/* background-color: #b26bcc */;
`;

export const AboutSectionImg = styled.div`
height: 75vh;
width: 150vw;
img{
    width: 100%;
    height: 75vh;
}
`;

export const AboutText = styled.div`
display: flex;
position: absolute;
flex-direction: column;
text-align: center;
height: 75vh;
width: 50vw; 
padding: 1.3rem;
/* background-color: #1A1423; */
/* background-color: #ffe5ec; */
/* border: white 2px solid; */

h1{
    padding-bottom: 1.5rem;
    font-family: 'Alfa Slab One', cursive;
    color: #FDC500;
    font-weight: 100;
    font-size: 3rem;
}
p{
    font-size: 1.2rem;
    text-align: justify;
    font-family: 'Open Sans', sans-serif;
    /* color: #3A0057; */
    color: white;
}
`;