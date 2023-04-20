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
display: flex;
height: 75vh;
img{
    width: 100vw;
}
`;

export const AboutText = styled.div`
display: flex;
position: absolute;
flex-direction: column;
text-align: center;
height: 60vh;
width: 50vw; 
background-color: #ffe5ec;
border-radius: 3rem;
border: 1px solid rgba( 255, 255, 255, 0.18 );
/* border: red 2px solid; */

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
    color: #3A0057;
}
`;